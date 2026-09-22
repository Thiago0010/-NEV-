
import os
import uuid
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from passlib.context import CryptContext

# 1. Definir caminhos absolutos para não ter erro de "table not found"
BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "restaurant_nev2.db"
DATABASE_URL = f"sqlite:///{DB_PATH}"

print(f"Conectando ao banco em: {DB_PATH}")

# 2. Configurar contexto de senha (mesmo do seu projeto)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def fix_password():
    engine = create_engine(DATABASE_URL)
    Session = sessionmaker(bind=engine)

    with Session() as session:
        try:
            # Usar SQL puro para evitar dependência de modelos se houver erro de import
            result = session.execute(
                text("SELECT id FROM users WHERE email = :email"),
                {"email": "teste_pagante@nev2.com"}
            ).fetchone()

            if result:
                user_id = result[0]
                hashed_password = pwd_context.hash("123456")

                session.execute(
                    text("UPDATE users SET hashed_password = :pw WHERE id = :id"),
                    {"pw": hashed_password, "id": user_id}
                )
                session.commit()
                print("✅ Senha corrigida com sucesso!")
                print("Login: teste_pagante@nev2.com | Senha: 123456")
            else:
                print("❌ Usuário 'teste_pagante@nev2.com' não encontrado no banco.")
        except Exception as e:
            print(f"❌ Erro inesperado: {e}")

if __name__ == "__main__":
    from sqlalchemy import text
    fix_password()

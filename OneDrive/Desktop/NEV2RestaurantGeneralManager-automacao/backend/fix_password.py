
import asyncio
import uuid
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from app.models import User
from app.core.security import get_password_hash # Assumindo que exista essa função

async def fix_password():
    DATABASE_URL = "sqlite:///./restaurant_nev2.db"
    engine = create_engine(DATABASE_URL)
    Session = sessionmaker(bind=engine)

    with Session() as session:
        try:
            # Buscar o usuário de teste
            user = session.query(User).filter(User.email == "teste_pagante@nev2.com").first()
            if user:
                # Gerar o hash real para a senha '123456'
                # Se get_password_hash não estiver disponível, usaremos um hash manual compatível
                from passlib.context import CryptContext
                pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
                hashed_password = pwd_context.hash("123456")

                user.hashed_password = hashed_password
                session.commit()
                print("✅ Senha corrigida com sucesso!")
                print("Login: teste_pagante@nev2.com | Senha: 123456")
            else:
                print("❌ Usuário não encontrado.")
        except Exception as e:
            print(f"❌ Erro: {e}")

if __name__ == "__main__":
    asyncio.run(fix_password())


import asyncio
import sqlite3
from pathlib import Path

async def link_user_to_restaurant():
    db_path = Path(__file__).resolve().parent / "restaurant_nev2.db"
    print(f"Corrigindo vínculos no banco: {db_path}")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    try:
        # 1. Pegar o ID do único restaurante
        cursor.execute("SELECT id FROM restaurants LIMIT 1")
        res = cursor.fetchone()
        if not res:
            print("❌ Nenhum restaurante encontrado.")
            return
        rid = res[0]

        # 2. Pegar o ID do usuário dono
        cursor.execute("SELECT id FROM users WHERE role = 'owner' LIMIT 1")
        user_res = cursor.fetchone()
        if not user_res:
            print("❌ Nenhum usuário dono encontrado.")
            return
        uid = user_res[0]

        # 3. Vincular Usuário -> Restaurante
        cursor.execute("UPDATE users SET restaurant_id = ? WHERE id = ?", (rid, uid))

        # 4. Garantir que o Restaurante -> Owner esteja correto
        cursor.execute("UPDATE restaurants SET owner_id = ? WHERE id = ?", (uid, rid))

        conn.commit()
        print(f"✅ Vínculos corrigidos!")
        print(f"Usuário {uid} -> Restaurante {rid}")

    except Exception as e:
        print(f"❌ Erro ao vincular: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    asyncio.run(link_user_to_restaurant())

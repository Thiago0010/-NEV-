
import asyncio
import sqlite3
from pathlib import Path

async def diagnose_tables():
    db_path = Path(__file__).resolve().parent / "restaurant_nev2.db"
    print(f"Diagnosticando banco em: {db_path}")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    try:
        print("\n--- Restaurantes ---")
        cursor.execute("SELECT id, name FROM restaurants")
        restaurants = cursor.fetchall()
        for r in restaurants:
            print(f"ID: {r[0]} | Nome: {r[1]}")

        print("\n--- Usuários ---")
        cursor.execute("SELECT id, email, role FROM users")
        users = cursor.fetchall()
        for u in users:
            print(f"ID: {u[0]} | Email: {u[1]} | Role: {u[2]}")

        print("\n--- Mesas ---")
        cursor.execute("SELECT id, number, restaurant_id, status FROM tables")
        tables = cursor.fetchall()
        for t in tables:
            print(f"ID: {t[0]} | Mesa: {t[1]} | RID: {t[2]} | Status: {t[3]}")

    except Exception as e:
        print(f"Erro no diagnóstico: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    asyncio.run(diagnose_tables())


import asyncio
import uuid
from datetime import datetime, timedelta
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.models import User, Restaurant, PlanName, PlanStatus, UserRole
from app.core.security import get_password_hash

DATABASE_URL = "sqlite:///./restaurant_nev2.db"

async def create_paying_account():
    engine = create_engine(DATABASE_URL)
    Session = sessionmaker(bind=engine)

    with Session() as session:
        try:
            email = "caselasthiago@gmail.com"
            password = "04216F1031EF"

            # 1. Gerenciar Usuário
            user = session.query(User).filter(User.email == email).first()
            if not user:
                user = User(
                    id=uuid.uuid4(),
                    email=email,
                    hashed_password=get_password_hash(password),
                    full_name="Thiago Caselas (Teste Pagante)",
                    role=UserRole.OWNER.value,
                    is_active=True
                )
                session.add(user)
                session.flush() # Gera o ID do usuário
                print(f"👤 Usuário criado: {email}")
            else:
                user.hashed_password = get_password_hash(password)
                print(f"🔄 Senha atualizada para: {email}")

            # 2. Gerenciar Restaurante
            # Tenta achar por owner_id OU por slug para evitar duplicidade
            restaurant = session.query(Restaurant).filter(
                (Restaurant.owner_id == user.id) | (Restaurant.slug == "restaurante-teste-pagante")
            ).first()

            if not restaurant:
                restaurant = Restaurant(
                    id=uuid.uuid4(),
                    name="Restaurante Teste Pagante",
                    slug="restaurante-teste-pagante",
                    owner_id=user.id,
                    plan_name=PlanName.PROFISSIONAL.value,
                    plan_status=PlanStatus.ACTIVE.value,
                    current_period_end=datetime.now() + timedelta(days=365),
                    is_active=True
                )
                session.add(restaurant)
                print(f"🏪 Restaurante criado: {restaurant.name}")
            else:
                restaurant.plan_name = PlanName.PROFISSIONAL.value
                restaurant.plan_status = PlanStatus.ACTIVE.value
                restaurant.current_period_end = datetime.now() + timedelta(days=365)
                restaurant.owner_id = user.id # Garante que o dono é o usuário certo
                print(f"🔄 Restaurante existente atualizado para plano PROFISSIONAL.")

            # 3. Vincular usuário ao restaurante
            user.restaurant_id = restaurant.id

            session.commit()
            print(f"\n✅ CONTA CONFIGURADA COM SUCESSO!")
            print(f"📧 EMAIL: {email}")
            print(f"🔑 SENHA: {password}")
            print(f"💎 PLANO: {restaurant.plan_name} (Status: {restaurant.plan_status})")

        except Exception as e:
            session.rollback()
            print(f"❌ Erro: {e}")

if __name__ == "__main__":
    asyncio.run(create_paying_account())

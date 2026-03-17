from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="GameFrilance API")

# Разрешаем запросы с фронтенда
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "GameFrilance API работает!",
        "status": "ok",
        "version": "1.0.0"
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.get("/api/orders")
async def get_orders():
    # Тестовые данные
    return [
        {
            "id": 1,
            "title": "Буст калибровки Dota 2",
            "game": "Dota 2",
            "price": 1500,
            "description": "Нужно поднять MMR с 2000 до 2500"
        },
        {
            "id": 2,
            "title": "1000 голды WoW",
            "game": "WoW",
            "price": 800,
            "description": "Классик сервер"
        }
    ]
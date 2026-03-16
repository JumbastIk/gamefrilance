from fastapi import FastAPI

# Создаем экземпляр приложения FastAPI
app = FastAPI(
    title="GameFrilance API",
    description="API для биржи игровых заказов",
    version="0.1.0"
)

# Корневой эндпоинт
@app.get("/")
async def root():
    return {
        "message": "GameFrilance API работает!",
        "status": "ok",
        "version": "0.1.0"
    }

# Эндпоинт для проверки здоровья
@app.get("/health")
async def health():
    return {"status": "healthy"}
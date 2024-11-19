from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

origins = ["http://127.0.0.1:8081"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
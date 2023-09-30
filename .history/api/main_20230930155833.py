from fastapi import FastAPI
from routers import accounts, links
from fastapi.middleware.cors import CORSMiddleware
import os


app = FastAPI()
app.include_router(accounts.router, tags=["Accounts"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

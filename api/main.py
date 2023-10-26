from fastapi import FastAPI
from routers import accounts, links, trees
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
import os


app = FastAPI()
app.include_router(authenticator.router, tags=["Accounts"])
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(links.router, tags=["Links"])
app.include_router(trees.router, tags=["Trees"])


origins = [
    os.environ.get("CORS_HOST", "http://localhost:3000"),
    "http://localhost:3000/",
    "https://linktree-app-lake.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

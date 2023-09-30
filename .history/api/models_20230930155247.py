from pydantic import BaseModel
from typing import Optional


class AccountIn(BaseModel):
    first_name: str
    last_name: str
    email: str
    username: str
    password: str


class AccountOut(BaseModel):
    id: int
    last_name: str
    email: str
    username: str
    password: str


class 
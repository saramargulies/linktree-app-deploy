from pydantic import BaseModel, Field
from typing import Optional, List
from jwtdown_fastapi.authentication import Token
from datetime import date


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    first_name: str
    last_name: str
    email: str
    username: str
    password: str


class AccountOut(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    email: str
    username: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str


class LinkIn(BaseModel):
    name: Optional[str]
    link: str
    counter: int
    locked: bool = False


class LinkOut(BaseModel):
    link_id: int
    name: str
    link: str
    counter: int
    locked: bool
    user_id: int


class TreeOut(BaseModel):
    tree_id: int
    views: List[date]
    user_id: int

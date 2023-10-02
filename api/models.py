from pydantic import BaseModel
from typing import Optional
from jwtdown_fastapi.authentication import Token


class DuplicateAccountError(ValueError):
    pass


class AccountIn(BaseModel):
    first_name: str
    last_name: str
    email: str
    username: str
    password: str


class AccountOut(BaseModel):
    id: int
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
    id: int
    name: str
    link: str
    username: str
    counter: int
    locked: bool
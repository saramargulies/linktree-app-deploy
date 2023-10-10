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
##We should not include raw password data in acc out -> need to watch riley auth video


class AccountOutWithPassword(AccountOut):
    hashed_password: str

class LinkIn(BaseModel):
    name: Optional[str]
    link: str
    username: str
    counter: int
    locked: bool = False


class LinkOut(BaseModel):
    id: int
    name: str
    link: str
    username: str
    counter: int
    locked: bool
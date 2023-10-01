from fastapi import APIRouter, Depends
from models import AccountIn
from queries.accounts import AccountRepository


router = APIRouter()


@router.post("/accounts")
def create_account(account: AccountIn, repo: AccountRepository = Depends()):
    repo.create(account)
    return repo.create(account)

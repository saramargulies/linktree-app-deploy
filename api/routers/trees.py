from fastapi import APIRouter, Depends
from api.models import TreeOut
from typing import List
from queries.trees import TreeRepository
from api.authenticator import authenticator
from datetime import datetime, date

router = APIRouter()


@router.get("/trees", response_model=List[TreeOut])
def get_tree(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TreeRepository = Depends(),
):
    return repo.get(username=account_data["username"])


@router.put("/trees/{username}", response_model=List[date])
def update_tree(
    username: str,
    repo: TreeRepository = Depends(),
):
    return repo.update(username=username)

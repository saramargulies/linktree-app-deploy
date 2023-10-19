from fastapi import APIRouter, Depends
from models import TreeOut
from typing import List
from queries.trees import TreeRepository
from authenticator import authenticator
from datetime import datetime, date

router = APIRouter()


@router.get("/trees")
def get_tree(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: TreeRepository = Depends(),
):
    return repo.get(username=account_data["username"])


@router.put("/trees/{username}")
def update_tree(
    username: str,
    repo: TreeRepository = Depends(),
):
    return repo.update(username=username)

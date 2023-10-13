from fastapi import APIRouter, Depends
from models import TreeOut
from typing import List
from queries.trees import TreeRepository
from authenticator import authenticator
from datetime import datetime, date

router = APIRouter()


@router.get("/trees/{user_id}")
def get_tree(user_id: str, repo: TreeRepository = Depends()):
    return repo.get(user_id)


@router.put("/trees/{username}")
def update_tree(
    # tree_id: str,
    # user_id: str,
    username: str,
    repo: TreeRepository = Depends(),
):
    return repo.update(username=username)

from fastapi import APIRouter, Depends
from models import TreeOut
from typing import List
from queries.trees import TreeRepository
from authenticator import authenticator
from datetime import datetime

router = APIRouter()



@router.get("/trees/{user_id}")
def get_links(user_id: str, repo: TreeRepository = Depends()):
    return repo.get(user_id)

# @router.put("/trees/{user_id}")
# def update_link(
#     link_id: str,
#     link: LinkIn,
#     account_data: dict = Depends(authenticator.get_current_account_data),
#     repo: LinkRepository = Depends(),
# ):
#     return repo.update(link=link, link_id=link_id, user_id=account_data["user_id"])
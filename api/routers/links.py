from fastapi import APIRouter, Depends
from models import LinkIn, LinkOut
from typing import List
from queries.links import LinkRepository
from authenticator import authenticator

router = APIRouter()


@router.post("/links", response_model=LinkOut)
def create_link(
    link: LinkIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: LinkRepository = Depends(),
):
    return repo.create(link, user_id=account_data["user_id"])


@router.get("/links", response_model=List[LinkOut])
def get_links(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: LinkRepository = Depends(),
):
    return repo.get_links_by_account(user_id=account_data["user_id"])


@router.delete("/links/{link_id}")
def delete_link(
    link_id: str,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: LinkRepository = Depends(),
) -> bool:
    return repo.delete(link_id=link_id, user_id=account_data["user_id"])


@router.put("/links/{link_id}")
def update_link(
    link_id: str,
    link: LinkIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: LinkRepository = Depends(),
):
    return repo.update(
        link=link, link_id=link_id, user_id=account_data["user_id"]
    )

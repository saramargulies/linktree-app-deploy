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
    return repo.create(link, acc)


@router.get("/links/{username}", response_model=List[LinkOut])
def get_links(username: str, repo: LinkRepository = Depends()):
    return repo.get_links_by_account(username)


@router.delete("/links/{link_id}")
def delete_link(
    link_id: str,
)
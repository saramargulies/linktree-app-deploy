from fastapi import APIRouter, Depends
from models import LinkIn, LinkOut
from typing import List
from queries.links import LinkRepository

router = APIRouter()

@router.post("/links", response_model=LinkOut)
def create_link(link: LinkIn, repo: LinkRepository = Depends()):
    repo.create(link)
    return repo.create(link)


@router.get("/links/{username}", response_model=List[LinkOut])
def get_links(username: str, repo: LinkRepository = Depends()):
    return repo.get_links_by_account(username)


@router.delete("/links/{link_id}")
def delete_link(
    link_id: str,
)
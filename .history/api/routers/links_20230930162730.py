from fastapi import APIRouter, Depends
from models import LinkIn, LinkOut
from queries.links import LinkRepository

router = APIRouter()

@router.post("/links", response_model=LinkOut)
def create_link(link: LinkIn, repo: LinkRepository = Depends()):
    repo.create(link)
    return repo.create(link)

@router.get("/links", response_model=LinkOut)
def get_
from fastapi import APIRouter, Depends
from models import LinkIn
from queries.links import LinkRepository

router = APIRouter()

@router.post("/links")
def create_link(link: LinkIn, repo: LinkRepository = Depends()):
    repo.create(link)
    return repo.creat(link)
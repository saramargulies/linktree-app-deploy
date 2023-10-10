from fastapi import APIRouter, Depends
from models import LinkIn
from queries.links import LinkRepository

router = APIRouter()

@router.p
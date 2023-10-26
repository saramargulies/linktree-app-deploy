from fastapi import APIRouter, Depends
from api.models import LinkIn, LinkOut, Counter
from typing import List
from queries.links import LinkRepository
from queries.accounts import AccountRepository
from api.authenticator import authenticator

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


@router.get("/links/{username}", response_model=List[LinkOut] | None)
def get_links_by_username(
    username: str,
    links_repo: LinkRepository = Depends(),
    acc_repo: AccountRepository = Depends(),
):
    user_id = acc_repo.get_user_id(username)
    if user_id:
        return links_repo.get_links_by_account(user_id=user_id.user_id)
    else:
        return None


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


@router.put("/links/counter/{link_id}", response_model=Counter)
def update_link(
    link_id: str,
    counter: Counter,
    repo: LinkRepository = Depends(),
):
    return repo.incrementCounter(link_id=link_id, counter=counter.counter)

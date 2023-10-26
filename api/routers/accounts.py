from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from authenticator import authenticator
from models import (
    AccountIn,
    AccountOut,
    AccountOutWithPassword,
    AccountForm,
    AccountToken,
    HttpError,
    DuplicateAccountError,
)
from queries.accounts import AccountRepository
from queries.trees import TreeRepository
from typing import Union


router = APIRouter()


@router.get("/protected", response_model=bool)
async def get_protected(
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return True


@router.get("/token", response_model=Union[AccountToken, None])
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.post("/accounts", response_model=Union[AccountToken, HttpError])
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountRepository = Depends(),
    tree: TreeRepository = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Those credentials already exist.",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    tree.create(account.username)
    return AccountToken(account=account, **token.dict())

from fastapi import APIRouter, Depends
from models import AccountIn
from queries.accounts import AccountRepository


router = APIRouter()


@router.post("/accounts")
def create_account(account: AccountIn, repo: AccountRepository = Depends()):
    repo.create(account)
    return repo.create(account)


# class AccountRepo(BaseModel):
#     def get(self, username: str) -> AccountOutWithPassword:
#         acc = collection.find_one({"username": username})
#         print
#         if not acc:
#             return None
#         acc["id"] = str(acc["_id"])
#         return AccountOutWithPassword(**acc)

#     def create(
#         self, info: AccountIn, hashed_password: str
#     ) -> AccountOutWithPassword:
#         info = info.dict()
#         if self.get(info["username"]) is not None:
#             raise DuplicateAccountError
#         info["hashed_password"] = hashed_password
#         del info["password"]
#         collection.insert_one(info)
#         id = str(info["_id"])
#         acc = AccountOutWithPassword(**info, id=id)
#         return acc

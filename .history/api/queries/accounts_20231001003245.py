from models import AccountIn, AccountOut
from .pool import pool


class AccountRepository:
    def create(self, account: AccountIn) -> AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO accounts
                        (first_name, last_name, email, username, password)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        account.first_name,
                        account.last_name,
                        account.email,
                        account.username,
                        account.password,
                    ],
                )
                id = result.fetchone()[0]
                old_data = account.dict()
                return AccountOut(id=id, **old_data)


##Reference from NPDB on auth creation
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

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

    def get_link_by_user()
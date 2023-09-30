from models import LinkIn, LinkOut
from .pool import pool


class LinkRepository:
    def create(self, link: LinkIn) -> LinkOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO links
                        (name, link, username, counter, locked)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        link.name,
                        link.link,
                        link.username,
                        link.counter,
                        link.locked
                    ],
                )
                id = result.fetchone()[0]
                old_data = link.dict()
                return LinkOut(id=id, **old_data)
            
    def get_links_by_account(self, username: str):
        with pool.connection() as conn:
            with conn.curson() as db:
                result = db.execute(
                    """
                    """
                )
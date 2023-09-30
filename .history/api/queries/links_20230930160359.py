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
                        (%s, %s, %s, )
                    """
                )
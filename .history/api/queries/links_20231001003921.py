from models import LinkIn, LinkOut
from typing import List
from .pool import pool


class LinkRepository:
    def create(self, link: LinkIn, username: str) -> LinkOut:
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
                        username,
                        link.counter,
                        link.locked
                    ],
                )
                id = result.fetchone()[0]
                old_data = link.dict()
                return LinkOut(id=id, **old_data)
            
    def get_links_by_account(self, username: str) -> List[LinkOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id, name, link, username, counter, locked 
                    FROM links
                    WHERE username = %s
                    """,
                    [username]
                )
                results = []
                for row in db.fetchall():
                    link = {}
                    for i, column in enumerate(db.description):
                        link[column.name] = row[i]
                    results.append(link)
                print(results)
                return results



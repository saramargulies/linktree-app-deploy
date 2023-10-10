from models import LinkIn, LinkOut
from typing import List
from .pool import pool


class LinkRepository:
    def create(self, link: LinkIn, user_id: str) -> LinkOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO links
                        (name, link, user_id, counter, locked)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING link_id;
                    """,
                    [
                        link.name,
                        link.link,
                        user_id,
                        link.counter,
                        link.locked
                    ],
                )
                id = result.fetchone()[0]
                old_data = link.dict()
                return LinkOut(link_id=id, **old_data, user_id=user_id)
            
    def get_links_by_account(self, user_id: str) -> List[LinkOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT link_id, name, link, user_id, counter, locked 
                    FROM links
                    WHERE user_id = %s
                    """,
                    [user_id]
                )
                results = []
                for row in db.fetchall():
                    link = {}
                    for i, column in enumerate(db.description):
                        link[column.name] = row[i]
                    results.append(link)
                return results
    
    def delete(self, link_id: str, user_id: str):
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        DELETE FROM links
                        WHERE link_id = %s 
                        AND user_id = %s
                        """,
                        [
                            link_id,
                            user_id
                        ]
                    )
                    return True
        except Exception as e:
            print(e)
            return False
                
    def update(self, link: LinkIn, link_id: str, user_id: str) -> LinkOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    UPDATE links 
                    SET name = %s
                        , link = %s
                        , counter = %s
                        , locked = %s
                    WHERE link_id =%s AND user_id = %s
                    """,
                    [
                        link.name,
                        link.link,
                        link.counter,
                        link.locked,
                        link_id,
                        user_id
                    ],
                )
                old_data = link.dict()
                return LinkOut(link_id=link_id, **old_data, user_id=user_id)


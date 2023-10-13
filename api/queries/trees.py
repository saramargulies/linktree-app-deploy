from models import TreeOut
from .pool import pool
from pydantic import BaseModel
from datetime import datetime, date


class TreeRepository(BaseModel):
    def create(self, username: int) -> TreeOut:
        today = datetime.now()
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO tree
                        (username, views)
                    VALUES
                        (%s, %s)
                    RETURNING tree_id, views;
                    """,
                    [
                        username,
                        [today],
                    ],
                )
                fetched_result = result.fetchone()
                tree_id = fetched_result[0]
                views = fetched_result[1]
                return TreeOut(tree_id=tree_id, views=views, username=username)

    def get(self, username: str) -> TreeOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT tree_id, views, username
                    FROM tree
                    WHERE username = %s
                    """,
                    [username],
                )
                results = []
                for row in db.fetchall():
                    link = {}
                    for i, column in enumerate(db.description):
                        link[column.name] = row[i]
                    results.append(link)
                return results

    def update(self, username: str) -> TreeOut:
        view = datetime.now()
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    UPDATE tree
                    SET views = ARRAY_APPEND(views, %s)
                    WHERE username = %s
                    RETURNING views
                    """,
                    [
                        view,
                        username,
                    ],
                )
                return result.fetchone()[0]

            # TreeOut(
            #         tree_id=tree_id,
            #         user_id=user_id,
            #         views=result.fetchone()[0],
            #     )

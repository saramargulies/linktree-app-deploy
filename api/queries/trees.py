from models import TreeOut
from .pool import pool
from pydantic import BaseModel
from datetime import datetime


class TreeRepository(BaseModel):
    def create(self, user_id: int) -> TreeOut:
        today=datetime.now()
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO tree
                        (user_id, views)
                    VALUES
                        (%s, %s)
                    RETURNING tree_id, views;
                    """,
                    [
                        user_id,
                        [today],
                    ],
                )
                fetched_result = result.fetchone()
                tree_id = fetched_result[0]
                views=fetched_result[1]

                print("------------------", fetched_result[1], [today])
                return(TreeOut(tree_id=tree_id, views=views,user_id=user_id))
    
    def get(self, user_id: str) -> TreeOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT tree_id, views, user_id 
                    FROM tree
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
    


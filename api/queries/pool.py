import os
from psycopg_pool import ConnectionPool


POSTGRES_URL = os.environ.get("POSTGRES_URL")
pool = ConnectionPool(conninfo=POSTGRES_URL)

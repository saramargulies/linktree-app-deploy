import os
from psycopg_pool import ConnectionPool


POSTGRES_URL = os.environ.get("DATABASE_URL") + "="
pool = ConnectionPool(conninfo=POSTGRES_URL)

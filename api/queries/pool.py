import os
from psycopg_pool import ConnectionPool


POSTGRES_URL = os.environ.get("POSTGRES_URL")
print("===================================","THE POSTGRES URL (.GET) IS=", POSTGRES_URL, "THE OS.ENVIRON METHOD =", os.environ["POSTGRES_URL"])
pool = ConnectionPool(conninfo=POSTGRES_URL)

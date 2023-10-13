steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE accounts (
            user_id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(1000) NOT NULL,
            last_name VARCHAR(1000) NOT NULL,
            email VARCHAR(1000) NOT NULL,
            username VARCHAR(1000) NOT NULL UNIQUE,
            password VARCHAR(1000) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE accounts;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE links (
            link_id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000),
            link VARCHAR(1000) NOT NULL,
            counter INTEGER NOT NULL,
            locked BOOLEAN NOT NULL,
            user_id INTEGER REFERENCES accounts (user_id)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE links;
        """,
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE tree (
            tree_id SERIAL PRIMARY KEY NOT NULL,
            views DATE[],
            username VARCHAR(1000) REFERENCES accounts (username)
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE tree;
        """,
    ],
]

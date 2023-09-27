steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE links (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000),
            link VARCHAR(1000) NOT NULL,
            user VARCHAR(100) NOT NULL,
            counter INTEGER NOT NULL,
            locked BOOLEAN NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE links;
        """
    ],
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            first_name VARCHAR(100) NOT NULL,
            last_name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            username VARCHAR(100) NOT NULL
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """
    ]
]

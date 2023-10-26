from fastapi.testclient import TestClient
from api.main import app
from api.queries.links import LinkRepository
from api.queries.accounts import AccountRepository
from api.models import LinkIn
from api.authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {
        "user_id": 8,
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "username": "sara",
    }


class TestAccRepo:
    def get_user_id(self, username: str):
        return {"user_id": 0}


class TestLinkRepo:
    def create(self, link: LinkIn, user_id: int):
        link_out = {
            "link_id": 0,
            "name": link.name,
            "link": link.link,
            "counter": link.counter,
            "locked": link.locked,
            "user_id": user_id,
        }
        return link_out

    def get_links_by_account(self, user_id: str):
        return [
            {
                "link_id": 0,
                "name": "string",
                "link": "string",
                "counter": 0,
                "locked": True,
                "user_id": user_id,
            }
        ]

    def get_links_by_username(self, username: str):
        return [
            {
                "link_id": 0,
                "name": "string",
                "link": "string",
                "counter": 0,
                "locked": True,
                "user_id": 0,
            }
        ]

    def delete(self, link_id: str, user_id: str):
        return True

    def update(self, link: LinkIn, link_id: str, user_id: str):
        link_out = {
            "link_id": link_id,
            "name": link.name,
            "link": link.link,
            "counter": link.counter,
            "locked": link.locked,
            "user_id": user_id,
        }
        return link_out

    def incrementCounter(self, link_id: str, counter: int):
        return {
            "counter": counter,
        }


def test_create():
    app.dependency_overrides[LinkRepository] = TestLinkRepo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    link = {"name": "string", "link": "string", "counter": 0, "locked": False}

    result = client.post("/links", json=link)
    data = result.json()
    assert data == {
        "link_id": 0,
        "name": "string",
        "link": "string",
        "counter": 0,
        "locked": False,
        "user_id": 8,
    }
    assert result.status_code == 200


def test_get_links_by_account():
    app.dependency_overrides[LinkRepository] = TestLinkRepo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    result = client.get("/links")
    data = result.json()
    print(result, result.status_code, data)

    assert result.status_code == 200
    assert data == [
        {
            "link_id": 0,
            "name": "string",
            "link": "string",
            "counter": 0,
            "locked": True,
            "user_id": 8,
        }
    ]


def test_get_links_by_username():
    app.dependency_overrides[LinkRepository] = TestLinkRepo
    app.dependency_overrides[AccountRepository] = TestAccRepo
    # app.dependency_overrides[
    #     authenticator.get_current_account_data
    # ] = fake_get_current_account_data

    result = client.get("/links/string")
    data = result.json()
    print(result, result.status_code, data)

    assert result.status_code == 200
    assert data == [
        {
            "link_id": 0,
            "name": "string",
            "link": "string",
            "counter": 0,
            "locked": True,
            "user_id": 0,
        }
    ]


def test_delete():
    app.dependency_overrides[LinkRepository] = TestLinkRepo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    result = client.delete("/links/14")
    data = result.json()

    assert result.status_code == 200
    assert data is True


def test_update():
    app.dependency_overrides[LinkRepository] = TestLinkRepo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    link_in = {
        "name": "string",
        "link": "string",
        "counter": 0,
        "locked": False,
    }
    result = client.put("links/14", json=link_in)
    data = result.json()

    assert data == {
        "link_id": "14",
        "name": "string",
        "link": "string",
        "counter": 0,
        "locked": False,
        "user_id": 8,
    }

    assert result.status_code == 200


def test_incrementCounter():
    app.dependency_overrides[LinkRepository] = TestLinkRepo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    counter = {
        "counter": 4,
    }
    result = client.put("links/counter/14", json=counter)
    data = result.json()

    assert data == {
        "counter": 4,
    }
    assert result.status_code == 200

from fastapi.testclient import TestClient
from main import app
from queries.trees import TreeRepository
from models import TreeOut
from authenticator import authenticator

client = TestClient(app)


def fake_get_current_account_data():
    return {
        "user_id": 8,
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "username": "sara",
    }


class TestTreeRepo:
    def get(self, username: str):
        return [{"tree_id": 0, "views": ["2023-10-24"], "username": "string"}]

    def update(self, username: str):
        return [
            "2023-10-19",
            "2023-10-19",
            "2023-10-19",
        ]


def test_get():
    app.dependency_overrides[TreeRepository] = TestTreeRepo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    result = client.get("/trees")
    data = result.json()
    print(result, result.status_code, data)

    assert result.status_code == 200
    assert data == [
        {"tree_id": 0, "views": ["2023-10-24"], "username": "string"}
    ]


def test_update():
    app.dependency_overrides[TreeRepository] = TestTreeRepo
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data

    result = client.put("trees/sara")
    data = result.json()

    assert data == [
        "2023-10-19",
        "2023-10-19",
        "2023-10-19",
    ]

    assert result.status_code == 200

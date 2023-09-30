from models import LinkIn, LinkOut
from .pool import pool


class LinkRepository:
    def create(self, link: LinkIn) -> LinkOut
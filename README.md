# Linky - a Linktree clone

## Welcome to our Linktree clone!

This project was made with Python, FastAPI, and PostgreSQL on the back end and React.js and Javascript on the front end.

## Deployed App

A deployed version of this app can be found at: INSERT LINK HERE

## Docker set-up

In order to get this application running locally, you can fork & clone this project down to your local machine. Open docker and run the following commands in order:

`docker volume create linktree-app-data`

`docker compose build`

`docker compose up`

## Opening up the app on your machine

After running the docker commands you can navigate to "http://localhost:3000" to see the front end and "http://localhost:8000/docs" to see the FastAPI/swagger for the back end endpoints.

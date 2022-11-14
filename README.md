# Movie Organizer

This Restful API, made with TypeScript and Postgresql helps you to oganize your favorite movies.

## Description

This is a proof of concept that i made to study TypeScript. Below are some features that are present in this project:

- Add new movies
- Create new movies gender
- Add new streaming platforms
- Rate your movies
- Delete movies
- Read movies organized by platform


## Installation

1. Clone this repository.
2. Install the dependencies.

```bash
npm i
```
3. Create the .env file like .env.example.
4. Run the project.

```bash
npm start
```

## API documentation
### POST /movies
Body:
```json
{
  "name": "The Boys",
  "gender_Id": 1,
  "platform_Id": 3,
  "status_Id": 2
}
```
### POST /status
Body:
```json
{
    "type": "Already watch"
}
```
### POST /gender
Body:
```json
{
    "name": "TV Horror"
}
```
### POST /platform
Body:
```json
{
    "name": "HBO Max"
}
```
### GET /movies
Response:
```json
[
  {
    "id": 12,
    "name": "This is us",
    "gender": "Família",
    "platform": "Star+",
    "status": "Não assistido",
    "rating": 10
  },
  {
    "id": 11,
    "name": "Friends",
    "gender": "comédia",
    "platform": "HBO Max",
    "status": "Não assistido",
    "rating": 10
  }
  ...
]
```
### GET /movies/platform
Response:
```json
[
  {
    "name": "HBO Max",
    "movie_count": 3,
    "movies": [
      {
        "id": 11,
        "name": "Friends",
        "gender": "comédia",
        "rating": 10
      }
    ]
  },
  {
    "name": "Netflix",
    "movie_count": 2,
    "movies": [
      {
        "id": 2,
        "name": "Jurassic Park",
        "gender": "Aventura",
        "rating": null
      }
    ]
  },
  ...
]
```
### PUT /movies/:id/update
Body:
```json
{
    "rating": 10,
    "status-id": 1
}
```
### DELETE /movies/:id/delete

## Technologies
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'>
</p>

## License

[MIT](https://github.com/vinicbarros/Movie-Organizer-POC/blob/main/LICENSE)

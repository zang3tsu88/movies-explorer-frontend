# movies-explorer-frontend

This is a 4th project from a [Yandex Practicum](https://practicum.yandex.ru/) web dev course. In this project I learn to do basic JavaScript and manipulate DOM. Use objects and event listeners to add cards, like/delete them and make modal windows with JS validation for them.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Author](#author)

## Overview

### Screenshot

![](./src/images/screenshot_landing.png)

### Links

- Link to: [Figma Sketch Online](https://www.figma.com/file/7YiKUjzM8f9VhHYiZLVoIH/diploma?type=design&node-id=891-3857&mode=design&t=wwkowcQfquQB89Pp-0)
- Link to: [Figma File on Google Disk](https://drive.google.com/file/d/1qScsKSS9kIKWcWZ7KhiNDzK0t7DrbPtA/view?usp=drive_link)
- Link to: [Live Site](promovies.nomoredomains.work)
- Link to: [Backend](api.promovies.nomoredomains.work)
- Link to: [Pull Request](https://github.com/zang3tsu88/movies-explorer-frontend/pull/2)

### Other

158.160.100.240

```bash
# возвращает информацию о пользователе (email и имя)
GET /users/me

# обновляет информацию о пользователе (email и имя)
PATCH /users/me

# возвращает все сохранённые текущим пользователем фильмы
GET /movies

# создаёт фильм с переданными в теле
# country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
POST /movies

# удаляет сохранённый фильм по id
DELETE /movies/_id

# создаёт пользователя с переданными в теле
# email, password и name
POST /signup

# проверяет переданные в теле почту и пароль
# и возвращает JWT
POST /signin
```



## Author

- Github - [@zang3tsu88](https://github.com/zang3tsu88)

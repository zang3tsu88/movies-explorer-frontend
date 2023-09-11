// const BASE_URL = 'api.promovies.nomoredomains.work'
const BASE_URL = 'http://localhost:3000'

const getJson = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(getJson);
}

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(getJson);
}

export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(getJson);
}

export const updateUserData = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({ name, email })
  })
    .then(getJson);
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(getJson);
}

export const createMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify(movie)
  })
    .then(getJson);
}

export const deleteSavedMovies = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(getJson);
}
/*

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

*/

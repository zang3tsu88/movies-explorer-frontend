const MESSAGES = {
  PROFILE_UPDATE_ERROR: 'При обновлении профиля произошла ошибка.',
  NAME_ERROR: 'Имя должно содержать только латиницу, кириллицу, пробел и/или дефис.',
  EMAIL_ERROR: 'Некорректный email',
  URL_ERROR: 'Некорректный URL адрес',
  PAGE_NOT_FOUND: '  (✖╭╮✖)   Запрашиваемая страница не существует.',
  USER_NOT_FOUND: 'Пользователь не найден.',
  SAVED_MOVIES_NOT_FOUND: 'Нет сохранненых фильмов.',
  MOVIE_NOT_FOUND: 'Фильм с указанным _id не найден',
  FORBIDDEN_DELETE_MOVIE: 'Нельзя удалить чужой фильм',
  INCORRECT_EMAIL_OR_PASS: 'Вы ввели неправильный логин или пароль.',
  INCORRECT_DATA: 'Переданы некорректные данные.',
  EMAIL_ALREADY_EXISTS: 'Пользователь с такой почтой уже существует.',
  AUTHORIZATION_REQUIRED: 'Необходимо авторизоваться',
  MOVIE_CREATED: 'Фильм успешно создан.',
  MOVIE_DELETED: 'Фильм удален.',
  INTERNAL_SERVER_ERROR: 'На сервере произошла ошибка',

  // TODO(zang3tsu88): remove extra messages

  // Страница логина пользователя
  // 1. Вы ввели неправильный логин или пароль.
  // 2. При авторизации произошла ошибка. Токен не передан или передан не в том формате.
  // 3. При авторизации произошла ошибка. Переданный токен некорректен.

  // Страница регистрации пользователя
  // 1. Пользователь с таким email уже существует.
  // 2. При регистрации пользователя произошла ошибка.

  // Страница обновления профиля
  // 1. Пользователь с таким email уже существует.
  // 2. При обновлении профиля произошла ошибка.

  // Другое
  // 1. 500 На сервере произошла ошибка.
  // 2. 404 Страница по указанному маршруту не найдена.

};

export default MESSAGES;
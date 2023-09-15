export const NAME_REGEX = /^[a-zа-яё\-\s]+$/i;

export const SHORT_MOVIE_DURATION_IN_MINUTES = 40;
export const INT_60_MIN = 60;

export const CARD_ADD = {
  WIDTH_1280: 3,
  WIDTH_1274: 2,
  WIDTH_856: 2,
};

export const CARD_COUNT = {
  WIDTH_1280: 12,
  WIDTH_1274: 8,
  WIDTH_856: 5,
};

export const MESSAGES = {
  NOTHING_FOUND_SEARCH_ERROR: "Ничего не найдено",
  UNKNOWN_SEARCH_ERROR:
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  EMPTY_SEARCH_ERROR: "Нужно ввести ключевое слово",
  NAME_ERROR:
    "Имя должно содержать только латиницу, кириллицу, пробел и/или дефис.",
  EMAIL_ERROR: "Некорректный email",
  URL_ERROR: "Некорректный URL адрес",
  PAGE_NOT_FOUND: "  (✖╭╮✖)   Страница по указанному маршруту не найдена.",

  INCORRECT_EMAIL_OR_PASS: "Вы ввели неправильный логин или пароль.",
  // AUTHORIZATION_TOKEN_ERROR: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  // AUTHORIZATION_INVALID_TOKEN_ERROR: 'При авторизации произошла ошибка. Переданный токен некорректен.',

  EMAIL_ALREADY_EXISTS: "Пользователь с таким email уже существует.",
  REGISTRATION_ERROR: "При регистрации пользователя произошла ошибка.", // frontend - badrequest

  PROFILE_UPDATE_ERROR: "При обновлении профиля произошла ошибка.",

  USER_NOT_FOUND: "Пользователь не найден.",
  SAVED_MOVIES_NOT_FOUND: "Нет сохранненых фильмов.",
  MOVIE_NOT_FOUND: "Фильм с указанным _id не найден",
  FORBIDDEN_DELETE_MOVIE: "Нельзя удалить чужой фильм",
  INCORRECT_DATA: "Переданы некорректные данные.", // backend - badrequest
  AUTHORIZATION_REQUIRED: "Необходимо авторизоваться",
  MOVIE_CREATED: "Фильм успешно создан.",
  MOVIE_DELETED: "Фильм удален.",
  INTERNAL_SERVER_ERROR: "На сервере произошла ошибка",

  // TODO(zang3tsu88): remove extra messages

  // Страница логина пользователя
  // 1. Вы ввели неправильный логин или пароль.
  // 2.??? При авторизации произошла ошибка. Токен не передан или передан не в том формате.
  // 3.??? При авторизации произошла ошибка. Переданный токен некорректен.

  // Страница регистрации пользователя
  // 1. Пользователь с таким email уже существует.
  // 2. При регистрации пользователя произошла ошибка.

  // Страница обновления профиля
  // 1. Пользователь с таким email уже существует.
  // 2. При обновлении профиля произошла ошибка.
  // PROFILE_UPDATE_ERROR

  // Другое
  // 1. 500 На сервере произошла ошибка.
  // 2. 404 Страница по указанному маршруту не найдена.
};

export const HTTP_STATUS_CODES = {
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  BANDWIDTH_LIMIT_EXCEEDED: 509,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
};

import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext'
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Register from '../Register';
import Login from '../Login';
import Movies from '../Movies';
import Profile from '../Profile';
import SavedMovies from '../SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useEffect, useState } from 'react';
import * as movieApi from '../../utils/moviesApi';
import * as mainApi from '../../utils/mainApi';
import { HTTP_STATUS_CODES, MESSAGES, SHORT_MOVIE_DURATION_IN_MINUTES } from '../../utils/constants';

function App() {
  const navigate = useNavigate();

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({});

  const [ movies, setMovies ] = useState([]);
  const [ filteredMovies, setFilteredMovies ] = useState([]);

  const [ moviesSearchField, setMoviesSearchField ] = useState(localStorage.getItem('moviesSearchField') || '');
  const [ shortMoviesCheckbox, setShortMoviesCheckbox ] = useState(localStorage.getItem('shortMoviesCheckbox') || false);


  const [savedMoviesSearchField, setSavedMoviesSearchField] = useState('');
  const [savedShortMoviesCheckbox, setSavedShortMoviesCheckbox] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);


  const [ preloader, setPreloader ] = useState(false); // TODO : REname to isLoading ???
  const [ errorMessage, setErrorMessage ] = useState('');

  const getMovies = () => {
    movieApi
      .getMovies()
      .then(movies => {
        const newMovies = movies.map(movie => ({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: movieApi.BASE_URL + movie.image.url,
          trailerLink: movie.trailerLink,
          thumbnail: movieApi.BASE_URL + movie.image.formats.thumbnail.url,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        }))

        setMovies(newMovies);
        // localStorage.setItem('movies', JSON.stringify(newMovies));
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(MESSAGES.UNKNOWN_SEARCH_ERROR);
      })
      .finally(() => {
        setPreloader(false);
      })
  }

  const filterMovies = (movies, searchField, searchFieldCheckbox) => {
    return movies.filter((movie) =>
      searchFieldCheckbox
        ? movie.duration <= SHORT_MOVIE_DURATION_IN_MINUTES
        && (movie.nameRU.toLowerCase().includes(searchField.toLowerCase())
        || movie.nameEN.toLowerCase().includes(searchField.toLowerCase()))
        : movie.nameRU.toLowerCase().includes(searchField.toLowerCase())
          || movie.nameEN.toLowerCase().includes(searchField.toLowerCase())
    )
  }

  const searchProcess = () => {
    const newFilteredMovies = filterMovies(movies, moviesSearchField, shortMoviesCheckbox)
    setFilteredMovies(newFilteredMovies)
    localStorage.setItem('filteredMovies', JSON.stringify(newFilteredMovies));
    localStorage.setItem('moviesSearchField', moviesSearchField);
    localStorage.setItem('shortMoviesCheckbox', shortMoviesCheckbox);
    // TODO: Maybe not done
  }

  useEffect(() => {
    searchProcess();
  }, [shortMoviesCheckbox,]);

  const searchMovies = () => {
    if (!moviesSearchField) {
      setFilteredMovies([])
      setErrorMessage(MESSAGES.EMPTY_SEARCH_ERROR);
      setTimeout(()=> {
        setErrorMessage('')
      }, 4000);
      return;
    }

    if (movies.length > 0) {
      searchProcess(movies);
      setPreloader(false);
    } else {
      getMovies();
    }
  }

  const searchSavedMovies = () => {
    const newFilteredMovies = filterMovies(
      savedMovies,
      savedMoviesSearchField,
      savedShortMoviesCheckbox
    );
    setFilteredSavedMovies(newFilteredMovies);
  };

  const registerUser = ({ name, email, password }) => {
    mainApi
      .register(name, email, password)
      .then(() => {
        loginUser({ email, password });
      })
      .catch((err) => {
        if (err === HTTP_STATUS_CODES.CONFLICT ){
          setErrorMessage(MESSAGES.EMAIL_ALREADY_EXISTS)
        } else {
          setErrorMessage(MESSAGES.REGISTRATION_ERROR);
        }
        // TODO: Возможно нужно будет вывести какие-то ошибки.
      })
  }

  const checkLike = (movie) => savedMovies.some((item) => item.movieId === movie.movieId);


  // ============ AUTH ===================== //
  // ============ AUTH ===================== //

  const loginUser = ({ email, password }) => {
    mainApi
      .login(email, password)
      .then(({ token }) => {
        localStorage.setItem('jwt', token);
        setIsLoggedIn(true);
        navigate('/movies', {replace: true})
      })
      .catch((err) => {
        console.log(err)
        if (err === HTTP_STATUS_CODES.UNAUTHORIZED){
          setErrorMessage(MESSAGES.INCORRECT_EMAIL_OR_PASS)
        } else {
          console.log(err)
          // setErrorMessage(MESSAGES.REGISTRATION_ERROR);
        }
        // TODO: Возможно нужно будет вывести какие-то ошибки.
      })
  }

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate('/');
    setFilteredMovies([])
  }


  useEffect(() => {
    const token =  localStorage.getItem('jwt');
    if (!token) return;

    setIsLoggedIn(true);
    mainApi
      .getUserData()
      .then(() => setIsLoggedIn(true))
      .catch((err) => {
        setIsLoggedIn(false);
        console.log(err) // TODO: CLG
      })
  }, [])

  useEffect(() => {
    if (!isLoggedIn) return;

    mainApi
      .getUserData()
      .then((userData) => {
        setCurrentUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
      })
      .catch(console.log)

      // TODO: REDO IN Promise.all OR SOMETHING.
      // CURRENTLY IN PROMISE ALL, IF NO MOVIES - USER DOESNT LOAD AND LOADS ERROR 404 - MOVIES NOT FOUND

    mainApi
      .getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
        console.log('есть сохраненные фильмы. они попали в массив - savedMovies ')
        // localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
        setFilteredMovies([])
      })
      .catch((err) => {
        if (err === HTTP_STATUS_CODES.NOT_FOUND) {
          console.log(MESSAGES.SAVED_MOVIES_NOT_FOUND)
        } else {
          console.log(err)
        }
      })

  }, [isLoggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={
          <>
            <Header isLoggedIn={isLoggedIn}/>
            <Main/>
            <Footer />
          </>
          } />

        <Route path="/signup" element={
          <Register
            registerUser={registerUser}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          } />

        <Route path="/signin" element={
          <Login
            loginUser={loginUser}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        } />

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
          <Route path="/profile" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Profile logout={logout} />
            </>
          } />

          <Route path="/movies" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Movies
                filteredMovies={filteredMovies}
                moviesSearchField={moviesSearchField}
                setMoviesSearchField={setMoviesSearchField}
                shortMoviesCheckbox={shortMoviesCheckbox}
                toggleCheckbox={() => setShortMoviesCheckbox(!shortMoviesCheckbox)}
                searchMovies={searchMovies}
                errorMessage={errorMessage}
                preloader={preloader}
                checkLike={checkLike}
              />
              <Footer />
            </>
          } />

          <Route path="/saved-movies" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies
                savedMovies={savedMovies}
                savedMoviesSearchField={savedMoviesSearchField}
                setSavedMoviesSearchField={setSavedMoviesSearchField}
                savedShortMoviesCheckbox={savedShortMoviesCheckbox}
                toggleCheckbox={() => setSavedShortMoviesCheckbox(!savedShortMoviesCheckbox)}
                searchMovies={searchSavedMovies}
                errorMessage={errorMessage}
                preloader={preloader}
              />
              <Footer />
            </>
          } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;

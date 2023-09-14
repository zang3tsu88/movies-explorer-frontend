import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext'
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Register from '../Register';
import Login from '../Login';
import Movies from '../Movies';
import Profile from '../Profile';
import EditProfile from "../EditProfile";
import SavedMovies from '../SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { useEffect, useState } from 'react';
import * as movieApi from '../../utils/moviesApi';
import * as mainApi from '../../utils/mainApi';
import { HTTP_STATUS_CODES, MESSAGES } from '../../utils/constants';

function App() {
  const navigate = useNavigate();

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({});

  const [ movies, setMovies ] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [ preloader, setPreloader ] = useState(false); // TODO : REname to isLoading ?
  const [ errorMessage, setErrorMessage ] = useState('');

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
      })
  }

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
      })
  }

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  useEffect(() => {
    const token =  localStorage.getItem('jwt');
    if (!token) return;

    setIsLoggedIn(true);
    getCurrentUser()
  }, [])

  function getCurrentUser() {
    // setUsePreloader(true);
    mainApi
        .getUserData()
        .then((userData) => {
          setIsLoggedIn(true)
          setCurrentUser(userData);
          localStorage.setItem("userData", JSON.stringify(userData));
        })
        .catch((err) => {
          setIsLoggedIn(false);
          console.log(err) // TODO: CLG
        })
        .finally(() => {
          // setUsePreloader(false);
          // setIsTokenChecked(true);
        });
  }

  function getBitFilms() {
    movieApi.getMovies().then((movies) => {
      const updatedMovies = movies.map((movie) => {
        const savedMovie = savedMovies.find(
            (item) => item.movieId === movie.id,
        );
        if (savedMovie) {
          return { ...movie, class: "like", key: movie.id };
        }
        return { ...movie, class: "default", key: movie.id };
      });

      setMovies(updatedMovies);
    })
  }

  useEffect(() => {
    if (!isLoggedIn) return;

    getCurrentUser()
    mainApi.getSavedMovies()
      .then((savedMovies) => {
        const updatedSavedMovies = savedMovies.map((movie) => {
          return { ...movie, class: "remove", key: movie._id };
        });
        setSavedMovies(updatedSavedMovies);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [isLoggedIn])

  function profileUpdate({ name, email }) {
    // setUsePreloader(true);
    mainApi.updateUserData(name, email )
      .then((res) => {
        if (res !== false) {
          navigate("/profile", { replace: true });
          // setUseMessage("Профиль успешно обновлен");
          getCurrentUser();
        }
      })
      .catch((error) => {
        // setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        // setUsePreloader(false);
      });
  }

  function handleLikeMovie(movie) {
    // setUsePreloader(true);
    mainApi.createMovie(movie)
      .then((res) => {
        setMovies((state) =>
          state.map((el) =>
            el.id === res.movieId ? { ...el, class: "like" } : el,
          ),
        );
        res.class = "remove";
        setSavedMovies((prevMovies) => [...prevMovies, res]);
      })
      .catch((error) => {
        console.log(error);
      })
      // .finally(() => setUsePreloader(false));
  }

  function handleRemoveMovie(movieID) {
    // setUsePreloader(true);
    const removedMovie = savedMovies.find((item) => {
      return item.movieId === movieID ? item : "";
    });

    mainApi.deleteSavedMovies(removedMovie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((el) => el.movieId !== movieID));

        setMovies((state) =>
          state.map((el) =>
            el.id === movieID ? { ...el, class: "default" } : el,
          ),
        );
      })
      .catch((error) => {
        console.log(error);
      })
      // .finally(() => setUsePreloader(false));
  }

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

            <Route path="/edit" element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <EditProfile profileUpdate={profileUpdate}/>
              </>
            } />

          <Route path="/movies" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <Movies
                movies={ movies }
                handleLikeMovie={handleLikeMovie}
                handleRemoveMovie={handleRemoveMovie}
                getBitFilms={getBitFilms}
              />
              <Footer />
            </>
          } />

          <Route path="/saved-movies" element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <SavedMovies
                handleRemoveMovie={handleRemoveMovie}
                savedMovies={savedMovies}
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

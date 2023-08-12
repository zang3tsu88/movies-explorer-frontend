import './App.css';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';
import NotFound from '../NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Main/>
          <Footer />
          </>
          } />

        <Route path="/signup" element={
          <Register />
          } />

        <Route path="/signin" element={
          <Login />
        } />

        <Route path="/profile" element={
          <>
            <Header />
            <Profile />
          </>
        } />

        <Route path="/movies" element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        } />

        <Route path="/saved-movies" element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        } />

        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </>
  );
}

export default App;

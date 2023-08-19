import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import NotFound from '../NotFound';
import Register from '../Register';
import Login from '../Login';
import Movies from '../Movies';
import Profile from '../Profile';
import SavedMovies from '../SavedMovies';

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

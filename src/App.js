import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feeds/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';
import Widgets from './components/widgets/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            profile: userAuth.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;

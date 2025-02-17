import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from './components/localStorageLogin/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/localStorageLogin/SignIn';
import ContextApi from './components/contextApi/ContextApi';
import Home from './components/Home';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Welcome from './components/localStorageLogin/Welcome'

function App() {
  return (
    <div className="App">

      <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
          <Header />
          <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/signup'} element={<SignUp />}/>
            <Route path={'/signin'} element={<SignIn/>}/>
            <Route path={'/contextapi'} element={<ContextApi/>}/>
            <Route path={'/welcome'} element={<Welcome />}/>
            <Route path={'*'} element={<PageNotFound />}/>
          </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;

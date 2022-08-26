import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
// import axios from "./axios"
// import requests from './request';

import {
  BrowserRouter as Router,
  Routes, Route,
  // Link
} from "react-router-dom";
import './index.css';
import Login from './components/Login';
import AuthProvider from './Auth';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header />
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/" element={<Home />} />
            {/*  <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow /> */}

          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

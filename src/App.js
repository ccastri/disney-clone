import './index.css';
import {
  BrowserRouter as Router,
  Routes, Route,
} from "react-router-dom";

import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import ProtectedRoute from './components/ProtectedRoute'

import { AuthContextProvider } from './Auth';


function App() {
  return (
    <div className="App">

      <AuthContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route exact path="login" element={<Login />}></Route>
            <Route exact path="signup" element={<SignUp />}></Route>
            <Route path="detail/:id" element={<ProtectedRoute><Detail /></ProtectedRoute>}></Route>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          </Routes>
        </Router>
      </AuthContextProvider>

    </div>
  );
}

export default App;

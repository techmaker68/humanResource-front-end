import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import User from "./user/User";
import store from "./Redux/Store/Index";
import Navbar from "./componenets/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Sidebar from "./componenets/Sidebar";
import ProtectedRoute from "./ProtectedRoute";
import GetAttendence from "./user/GetAttendence";
import ChallengeThree from "./user/ChallengeThree";
import Register from "./auth/Register";

function App() {
  return (
    <>
      {" "}
      <Provider store={store}>
        <Router>
          <div className="row g-0">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <Navbar />
              <Routes>
               
              
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />

                <Route exact path="/dashboard" element={<ProtectedRoute />}>
                  <Route exact path="/dashboard" element={<User />} />
                </Route>

                <Route exact path="/attendence" element={<ProtectedRoute />}>
                  <Route exact path="/attendence" element={<GetAttendence />} />
                </Route>

                <Route exact path="/challengethree" element={<ProtectedRoute />}>
                  <Route exact path="/challengethree" element={<ChallengeThree />} />
                </Route>
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;

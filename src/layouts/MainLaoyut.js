import {
  BrowserRouter as Router
} from "react-router-dom";
import '../App.css';

import AppRoutes from "../routes/AppRoutes";
import Navbar from "../navbar/NavBar";

function MainLayout (){
  return (
    <div>
      <Router>
        <Navbar/>
        <AppRoutes/>
      </Router>
    </div>
  )}

export default MainLayout;
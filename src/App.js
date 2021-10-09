import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import LogIn from "./components/Pages/logIn";
import ContactUs from "./components/Pages/contact";
import PsoIso from "./components/Pages/pos-iso";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/PSO-ISO-Program" component={PsoIso} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/LogIn" component={LogIn} />
      </Switch>
    </Router>
  );
}

export default App;

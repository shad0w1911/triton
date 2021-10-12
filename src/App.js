import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import LogIn from "./components/Pages/logIn";
import { Contact } from "./components/Pages/contact";
import PsoIso from "./components/Pages/pos-iso";
import Footer from "./components/navbar/footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/PSO-ISO-Program" component={PsoIso} />
        <Route path="/Contact" component={Contact} />
        <Route path="/LogIn" component={LogIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import { Contact } from "./components/Pages/contact";
import Footer from "./components/navbar/footer";

function App() {
  return (
    <Router basename="triton-consultancy">
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

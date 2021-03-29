import Navbar from "./Component/Navbar";
import Search from "./Pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Style/App.scss';
import About from "./Pages/About";

function App() {

  return (

    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;

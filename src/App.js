
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './component/NavBar/NavBar';
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
// import NotFound from "./pages/NotFound";
import Favourites from "./pages/Favourites";

function App() {

  return (
    <Router>
      <Navbar />
      <Switch >
        <div className="container my-5">
          <Route path="/movie/" exact component={Movies} />
          <Route path="/movie/:id" exact component={MovieDetails} />
          <Route path="/favourites" component={Favourites} />
          {/* <Route path='*' component={NotFound} /> */}
        </div>

      </Switch>

    </Router>


  )

}

export default App;


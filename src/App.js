import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Create from './Create';
import Contact from './Contact';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';
import SearchBar from './SearchBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path='/search'>
              <SearchBar />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

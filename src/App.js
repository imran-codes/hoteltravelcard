import Hotelcard from './Hotelcard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Navbar from './Navbar';
import HotelDetails from './HotelDetails';
import NotFound from './NotFound';

function App() {

    return (
        <Router>
            <div className="App" >
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Hotelcard />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route path="/hotels/:id">
                        <HotelDetails />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
import Hotelcard from './Hotelcard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <Router>
            <div className="App" >
                <Switch>
                    <Route path="/">
                        <Hotelcard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
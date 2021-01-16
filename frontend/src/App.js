import {BrowserRouter, Link, Route} from 'react-router-dom';
import loginScreen from './screens/loginScreen';
import userRegisterScreen from './screens/userRegisterScreen';
import sellerRegisterScreen from './screens/sellerRegisterScreen';
import homeScreen from './screens/homeScreen';
import { ViewTicketScreen } from './screens/ViewTicketScreen';
import CreateTicketScreen from './screens/CreateTicketScreen';
import TicketsScreen from './screens/TicketsScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
          <div>
            <Link to="/" className="brand">Home</Link>
          </div>
        </header>
        <main>
          <Route path="/index" component={homeScreen} />
          <Route path="/login" component={loginScreen} />
          <Route path="/register/user" component={userRegisterScreen} />
          <Route path="/register/seller" component={sellerRegisterScreen} />
          <Route exact path="/" component={CreateTicketScreen} />
          <Route path="/ticket/:_id" component={ViewTicketScreen} />
          <Route path="/tickets" component={TicketsScreen} />
        </main>
        <footer>HTNE 2021 PROJECT ALL RIGHTS RESERVED</footer>
    </div>
      
    </BrowserRouter>
  );
}

export default App;

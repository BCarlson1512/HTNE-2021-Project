import {BrowserRouter, Link, Route} from 'react-router-dom';
import loginScreen from './screens/loginScreen';
import userRegisterScreen from './screens/userRegisterScreen';
import sellerRegisterScreen from './screens/sellerRegisterScreen';
import homeScreen from './screens/homeScreen';
import { ViewTicketScreen } from './screens/ViewTicketScreen';
import CreateTicketScreen from './screens/CreateTicketScreen';

function App() {
  return (
    <BrowserRouter>
      <header className="row">
        <div>
          <Link to="/" className="brand">Your Ecommerce Site!</Link>
        </div>
      </header>
      <main>
        <Route path="/index" component={homeScreen} />
        <Route path="/login" component={loginScreen} />
        <Route path="/register/user" component={userRegisterScreen} />
        <Route path="/register/seller" component={sellerRegisterScreen} />
        <Route path="/ticket/create" component={CreateTicketScreen} />
        <Route path="/ticket/:_id" component={ViewTicketScreen} />
      </main>
      <footer>HTNE 2021 PROJECT ALL RIGHTS RESERVED</footer>
    </BrowserRouter>
  );
}

export default App;

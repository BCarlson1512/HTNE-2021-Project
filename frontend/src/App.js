import {BrowserRouter, Link, Route} from 'react-router-dom';
import loginScreen from './screens/loginScreen';
import userRegisterScreen from './screens/userRegisterScreen';
import sellerRegisterScreen from './screens/sellerRegisterScreen';
import homeScreen from './screens/homeScreen';

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
        <Route path="register/user" component={userRegisterScreen} />
        <Route path="register/seller" component={sellerRegisterScreen} />
      </main>
      <footer>HTNE 2021 PROJECT ALL RIGHTS RESERVED</footer>
    </BrowserRouter>
  );
}

export default App;

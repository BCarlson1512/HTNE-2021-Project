import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import loginScreen from './screens/loginScreen';
import userRegisterScreen from './screens/userRegisterScreen';
import sellerRegisterScreen from './screens/sellerRegisterScreen';
import homeScreen from './screens/homeScreen';

function App() {
  return (
    <BrowserRouter>
      <Route path="/index" component={homeScreen} />
      <Route path="/login" component={loginScreen} />
      <Route path="/userRegister" component={userRegisterScreen} />
      <Route path="/selllerRegister" component={sellerRegisterScreen} />
    </BrowserRouter>
  );
}

export default App;

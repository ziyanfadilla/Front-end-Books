import { BrowserRouter , Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Signin from '../src/pages/SignIn'
import Signup from '../src/pages/Signup'
import Books from '../src/pages/Books'
import Borrow from '../src/pages/Borrow'
import Categorilogin from '../src/pages/Categorilogin'
import Categori from '../src/pages/Categori'
import Confirmations from '../src/pages/confirmations'
import Deskripsi from '../src/pages/deskripsi'
import Deskusi from '../src/pages/Diskusi'
import outofdate from '../src/pages/outofdate'
import profile from '../src/pages/Profile'
import Search from '../src/pages/Search'
import Uploadbooks from '../src/pages/Uploadbooks'
import waiting from '../src/pages/waiting'
import waitingborrow from '../src/pages/waitingborrow'


function App() {
  return (
    <BrowserRouter>
    <Route exact path = '/' component = {Home}/>
    <Route path = '/signin' component = {Signin}/>
    <Route path = '/signup' component = {Signup}/>
    <Route path = '/books' component = {Books}/>
    <Route path = '/borrow' component = {Borrow}/>
    <Route path = '/categorilogin' component = {Categorilogin}/>
    <Route path = '/categori' component = {Categori}/>
    <Route path = '/confirmations' component = {Confirmations}/>
    <Route path = '/deskripsi' component = {Deskripsi}/>
    <Route path = '/diskusi' component = {Deskusi}/>
    <Route path = '/outofdate' component = {outofdate}/>
    <Route path = '/profile' component = {profile}/>
    <Route path = '/search' component = {Search}/>
    <Route path = '/uploadbooks' component = {Uploadbooks}/>
    <Route path = '/waiting' component = {waiting}/>
    <Route path = '/waitingborrow' component = {waitingborrow}/>
    </BrowserRouter>

  );
}

export default App;

import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from './components/home'
import bookdetail from './components/bookdetail'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/detail/:id" component={bookdetail}></Route>
            </Switch>
        </BrowserRouter>
    )
}
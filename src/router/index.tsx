import { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from 'views/home'
import Login from 'views/user/login'
import Test from 'views/test/index'

export default class RouterWidget extends Component {
    render() {
        return <BrowserRouter>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/home" exact component={Home}></Route>
                <Route path="/test" exact component={Test}></Route>
        </BrowserRouter>
    }
}
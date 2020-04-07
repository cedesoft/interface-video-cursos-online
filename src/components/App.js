import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import welcome from '../pages/welcome'
import login from '../pages/login'
import NotFound from '../pages/NotFound'
import myprofile from '../pages/myprofile'
import editprofile from '../pages/editprofile'
import userprofile1 from '../pages/userprofile1'
import register from '../pages/register'
import recover from '../pages/revoverpass'
import changepass from '../pages/changepassword'
import library from '../pages/library'
import search from '../pages/search'
import failsearch from '../pages/failsearch'
import coursedetail from '../pages/coursedetail'
import carrito from '../pages/carrito'
function App(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={welcome}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/myprofile" component={myprofile}/>
            <Route exact path="/editprofile" component={editprofile}/>
            <Route exact path="/userprofile1" component={userprofile1}/>
            <Route exact path="/register" component={register}/>
            <Route exact path="/recoverpass" component={recover}/>
            <Route exact path="/changepass" component={changepass}/>
            <Route exact path="/library" component={library}/>
            <Route exact path="/search" component={search}/>
            <Route exact path="/failsearch" component={failsearch}/>
            <Route exact path="/coursedetail" component={coursedetail}/>
            <Route exact path="/carrito" component={carrito}/>
            <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    )
}

export default App
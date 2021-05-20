import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import UserLogin from './components/user-login';
import UserData from './components/user-data';
import collegeRegistration from './components/College-component/college-registration';
import CollegeLogin from './components/College-component/college-login';
import CollegeData from './components/College-component/college-data';



export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
            <Route exact path='/' component={UserLogin} />
            <Route exact path='/UserData' component={UserData} />
            <Route exact path='/collegeRegistration' component={collegeRegistration}  />
            <Route exact path='/CollegeLogin' component={CollegeLogin}  />
            <Route exact path='/CollegeData' component={CollegeData}  />

      </BrowserRouter>
    )
  }
}
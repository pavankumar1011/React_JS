import React,{ Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './design2.css';




export default class CollegeLogin extends Component{
  state={
    userDetails:{
    email:'',
    password:'',
  },
  errorMessage:false,
  };
  userDetails=(e)=>{
    let details = this.state.userDetails;
    details[e.target.name]=e.target.value;
    this.setState({
      userDetails: details,
    });
  };
  submitUser=(e)=>{
    e.preventDefault();
    console.log(this.state.userDetails);
    fetch('https://rahulmabbu.pythonanywhere.com/api/college_login/',{
      method:"POST",
        headers:{
          'content-type': 'application/json'
        },
      body:JSON.stringify(this.state.userDetails)
    })
    .then((response)=> response.json())
    .then((response)=>{
      if(response.token !== undefined){
        localStorage.setItem('Token', response.token)
        localStorage.setItem('CollegeName',response.college)
        localStorage.setItem('collegeEmail',this.state.userDetails.email);
        window.location.href="/CollegeData";
      }else{
        this.setState({
          errorMessage:true,
          errorMail:response.email,
          password:response.non_field_errors,
        });
       
        
      }
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    })
  };
  render(){
    return(
     <div>
           <div className="login-form">
                <h3><b><i>College Login</i></b></h3>
                  <form  autoComplete="off">
                     <TextField type="text" label="User Email" name="email" onChange={this.userDetails} 
                        value={this.state.email} variant="outlined"/>
                         <br/><br/>
                     <TextField type="password" label="password" name="password" onChange={this.userDetails} 
                         value={this.state.password} variant="outlined" />
                         <br/><br/>
                       <Button onClick={this.submitUser} variant="contained" color="primary">
                          Login
                        </Button>
                </form> 
                <div>
                    {this.state.errorMessage && (
                    <div>
                        <div>{this.state.errorMail}</div>
                        <div>{this.state.password}</div>
                    </div>
                    )}            
                </div>
            </div>      
      </div>
    );
  }
}

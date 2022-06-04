import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {login} from "../features/userSlice";







import { AppBar, Button, Divider} from '@material-ui/core';

import {Grid,Paper,TextField} from '@material-ui/core';
import GoogleIcon from '@mui/icons-material/Google';

import FacebookIcon from '@mui/icons-material/Facebook';

import AppleIcon from '@mui/icons-material/Apple';

import MaterialUISwitch from './darktheme';












  
export default function Login() {
   

    const paperStyle={padding:50,height:'80vh',width:'400px',margin:'200px 1050px',marginleft:"20"}
    const [setValue]=useState(0)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();
    
    const handleChange=(event,newValue)=>{
        setValue(newValue);
        

       
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }))


    }

    const btnstyle={margin:'8px 0'};
   
    return(
        <Grid>
             <AppBar height="30vh" color='inherit' ><h1>Login page dark mode by layo</h1></AppBar>
        <div className='container'>
           
        <Grid>
       
        <div className='image'>

             <img src={`${process.env.PUBLIC_URL}pic.jpg`} 
             style={{width:'1060px', height:730, position:'absolute'}}
             />
             
              <form className="myform" method="Post" onSubmit={(e)=> handlesubmit(e)}>
           




           

                      <Paper elevation={20} style={paperStyle}  >
                    
                        <Grid align ='left' fullwidth required>
                        <h4>Travelguru</h4>    <MaterialUISwitch /> <Divider variant="middle"/>
                
                

                        <h1>Sign into Travelguru</h1>
                      
                        <p >
                        <h2>Don't have an account?&nbsp;&nbsp;
            







                        <a
          className="App-link"
          href="src\components\signup.js"
          target="_blank"
          rel="noopener noreferrer"
          color="error"
        onClick={()=>handleChange("event",1)}
        >
          signup
        </a>

        </h2></p>
                         <Divider variant="middle"/> </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
                        
                            <TextField label='Fullname'  placeholder='fullname'  value={name} onChange={(e)=>setName(e.target.value)}  variant="outlined" padding='50' fullWidth required/><br/>&nbsp;&nbsp;
                            <TextField label='Email' placeholder='email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}  variant="outlined" fullWidth required/><br/>&nbsp;&nbsp;
                            <TextField label='Password' placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  variant="outlined" fullWidth required/>&nbsp;&nbsp;
                         
                            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth="true">CONTINUE</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Divider variant="middle"/>
                        <h4   align="center">     --OR--</h4>
                       
                        <Button type='submit' variant="contained" style={btnstyle}>
                            <GoogleIcon></GoogleIcon>Sign in with google</Button>&nbsp;&nbsp;
                            <Button type='submit' variant="contained" style={btnstyle}><FacebookIcon></FacebookIcon></Button>&nbsp;&nbsp;
                            <Button type='submit' variant="contained" style={btnstyle}><AppleIcon></AppleIcon></Button>
                      

                    </Paper></form>
                   </div>
                </Grid></div> </Grid>
               
            
    );
   
}




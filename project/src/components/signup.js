import React,{useState} from 'react';
import {Button} from '@material-ui/core';
import {Paper,TextField} from '@material-ui/core';

export default function Signup(){
    const paperStyle={padding:50,height:'80vh',width:'1400px',margin:'200px 1050px',marginleft:"20"}
    const btnstyle={margin:'8px 0'};


    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    
    return(
       <div className='MAC'>
             <form className="myform" method="Post" >
             <Paper elevation={20} style={paperStyle}>
                    
             <TextField label='Fullname'  placeholder='fullname'   variant="outlined" padding='50' fullWidth required/><br/>&nbsp;&nbsp;
                            <TextField label='Email' placeholder='email' type='email'  variant="outlined" fullWidth required/><br/>&nbsp;&nbsp;
                            <TextField label='Password' placeholder='password' type='password'   variant="outlined" fullWidth required/>
                         
                            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth="true">signup</Button>
<a href="/login" >already have account?</a>





</Paper></form>
</div>
)
};

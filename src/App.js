import { useState } from "react";
import {Button,Card,CardContent,Typography,TextField,Grid} from '@mui/material';
import './App.css';

function App() {
  let [password,setPassword] = useState('')
  let [fname,setFname] = useState('')
  let [lname,setLname] = useState('')
  let [email,setEmail] = useState('')
  let [number,setNumber] = useState('')


  function submitForm(){
    let data = Array()

    data.push(fname)
    data.push(lname)
    data.push(password)
    data.push(email)
    data.push(number)

    console.log('User Data : ',data)
  }

  return (
    <div className="App">
        <Card style={{margin:'40px auto',maxWidth:450}}>
          <CardContent>
            <Typography gutterBottom variant="h5">Contact Us</Typography>
            {/* <form> */}
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
              <TextField variant="outlined" 
                required 
                size="small" 
                label='First-name' 
                fullWidth 
                value={fname}
                onChange={(e)=>setFname(e.target.value)}
                ></TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField 
                variant="outlined"
                required 
                size="small" 
                label='Last-name' 
                fullWidth
                value={lname}
                onChange={(e)=>setLname(e.target.value)}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
              <TextField 
                type='password' 
                variant="outlined" 
                size="small" 
                label='Password' 
                fullWidth
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                error={!password}
                ></TextField>
              </Grid>

              <Grid item xs={12} >
              <TextField type='email' 
                variant="outlined" 
                size="small" 
                required
                label='Email' 
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
              <TextField type='number' 
                variant="outlined" 
                size="small" 
                label='Phone' 
                fullWidth
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
              <TextField label='Message' multiline rows={4} variant="outlined" size="small" fullWidth></TextField>
              </Grid>

              <Grid item xs={12} >
                <Button type="submit" variant="contained" color="primary" onClick={submitForm}>Submit</Button>
              </Grid>
            
            </Grid>
            {/* </form> */}
          </CardContent>
        </Card>
    </div>
  );
}

export default App;

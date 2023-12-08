import * as React from 'react';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
import Banner from '../banner'

import './contact.css';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        < Banner title={'Contact Us'} />
      </div>

      {/* <form name='initiumMail' netlify className='form-container'>
        <h1><span className='dualColor'>Send us</span> a message</h1>
        <div className='container__inputs'>
          <TextField
            required
            id="standard-required"
            label="Name"
            // defaultValue="Your name"
            variant="standard"
          />
          <TextField
            required
            id="standard-email"
            label="email"
            // defaultValue="Your name"
            variant="standard"
            // helperText="Incorrect entry."
          />
          <TextField
            required
            id="standard-phone"
            label="phone"
            // defaultValue="Your name"
            variant="standard"
          />
          <TextField
            id="standard-helperText"
            label="Your message"
            // defaultValue="Default Value"
            helperText="How we can help you"
            variant="standard"
          />
          <Stack direction="row" spacing={2}>
            <Button 
              type='submit'
              variant="contained"
              endIcon={<SendIcon />} 
              onClick={() => {
                alert('clicked')
              }}>
              Send
            </Button>
          </Stack>         

        </div>

      </form> */}

<form name="initiumMail" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="password" name="password" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      
    </Box>
  );
}
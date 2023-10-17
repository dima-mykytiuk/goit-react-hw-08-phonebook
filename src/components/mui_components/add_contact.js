import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {addContact} from "../../redux/contacts/operations";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";
import ParticlesBg from "particles-bg";

const defaultTheme = createTheme();

export default function AddContact() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const number = formData.get('number');

    if (!name || !number || isNaN(number)) {
      toast.error(`Fill in all the fields and make sure 'number' contains only numbers`);
    } else {
      dispatch(
        addContact({
          name,
          number,
        })
      );
      event.target.reset();
    }
  };

  return (
    <ThemeProvider theme={defaultTheme} sx={{ width: '100%'}}>
      <Container component="main" maxWidth="xs" sx={{ mt: 8}}>
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add contact
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="number"
              label="Phone"
              type="tel"
              id="phone"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add contact
            </Button>
          </Box>
        </Box>
      </Container>
      <ParticlesBg color="#003366" type="cobweb" bg={true} />
    </ThemeProvider>
  );
}

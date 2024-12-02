import React from 'react';
import { Box, Grid, Typography, IconButton, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from '../../componentes/head';
import './styles.css';
import Footer from '../../componentes/footer';


const ContactComponent = () => {
  return (
    <div className="background">
      <Box marginTop={"70px"} display="flex" justifyContent="center" padding={8} >
        <Header title="Seja um parceiro"/>
        <Grid container spacing={4} maxWidth="md" >
          <Grid item xs={12} md={5}>
            <Box bgcolor="white" p={3} borderRadius={2}>
              <Typography variant="h6" color="black" fontWeight="bold">
                Deseja ser um parceiro do projeto?
              </Typography>
              <Typography marginTop={"10px"} variant="body2" color="black" gutterBottom>
                Entre em contato!
              </Typography>
              <Box display="flex" alignItems="center" mt={3}>
                <EmailIcon style={{ color: "black", border: "1px solid black", borderRadius: "10%", width: "30px", height: "30px" }} />
                <Box ml={2}>
                  <Typography color="black" fontWeight="bold">
                    Envie um email
                  </Typography>
                  <Typography color="black">institutoluisinho@gmail.com</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mt={2}>
                <PhoneIcon style={{ color: "black", border: "1px solid black", borderRadius: "10%", width: "30px", height: "30px" }} />
                <Box ml={2}>
                  <Typography color="black" fontWeight="bold">
                    Numero de contato
                  </Typography>
                  <Typography color="black">(11) 98765-2233</Typography>
                </Box>
              </Box>

              <Box display="flex" mt={3} justifyContent={"space-around"}>
                <IconButton color="primary">
                  <TwitterIcon style={{ color: "black", border: "1px solid black", borderRadius: "10%", width: "30px", height: "30px" }} />
                </IconButton>
                <IconButton color="primary">
                  <LinkedInIcon style={{ color: "black", border: "1px solid black", borderRadius: "10%", width: "30px", height: "30px" }} />
                </IconButton>
                <IconButton color="primary">
                  <InstagramIcon style={{ color: "black", border: "1px solid black", borderRadius: "10%", width: "30px", height: "30px" }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box bgcolor="#590f15" p={3} borderRadius={2}>
              <Box bgcolor="white" p={3} borderRadius={2}>
                <Typography variant="h6" color="black" fontWeight="bold" gutterBottom>
                  Entre em contato!
                </Typography>
                <TextField fullWidth label="Nome" variant="outlined" margin="normal" />
                <TextField fullWidth label="Celular" variant="outlined" margin="normal" />
                <TextField fullWidth label="Email" variant="outlined" margin="normal" />
                <TextField fullWidth label="Mensagem" variant="outlined" multiline rows={4} margin="normal" />
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: '16px', backgroundColor: "#590f15" }}>
                  ENVIAR
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Box>
      <Footer />
    </div>
  );
};

export default ContactComponent;

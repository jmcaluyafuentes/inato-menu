import { Container, Typography, Box } from '@mui/material';
import heroImage from '../assets/hero-img.jpg'

const HomePage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Hero Image Section */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
          }}
          width='80%'
        >
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              display: 'block',
              color: 'black', 
              // width: { xs: '90%', sm: '70%', md: '50%' },
              fontWeight: 'bold',
              margin: '0 auto',
              textAlign: 'center'
            }} 
            color="primary"
          >
            Inato Menu
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mt: 2, 
              color: 'black', 
              backgroundColor: 'rgba(255, 253, 253, 0.5)', 
              borderRadius: '5px', 
              padding: '5px',
              fontSize: { xs: '20px', sm: '25px', md: '25px' },
            }} 
              color="primary"
          >
            List of menus to easily decide what to cook next.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;

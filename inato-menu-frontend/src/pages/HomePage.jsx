import MenuList from "../components/MenuList"
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Inato Menu
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          List of menus to easily decide what to cook next.
        </Typography>
      </Box>
      <MenuList />
    </Container>
  )
}

export default HomePage
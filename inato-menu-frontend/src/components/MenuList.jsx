import { useState } from 'react';
import { Container, Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const MenuList = () => {
  // Sample menu items (replace with API call later)
  const [menus, setMenus] = useState([
    {
      id: 1,
      title: 'Pork Adobo',
      description: 'Easy to prepare',
      image: 'https://placehold.co/400',
      link: 'https://panlasangpinoy.com/filipino-food-pork-adobo-recipe/',
    },
    {
      id: 2,
      title: 'Bam-i',
      description: 'Nice to cook fortnightly',
      image: 'https://placehold.co/400',
      link: 'https://panlasangpinoy.com/bam-i-cebuano-pansit-recipe/',
    }
  ])

  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {menus.map((menu) => (
          <Box key={menu.id} sx={{ width: { xs: "100%", sm: "48%", md: "32%" } }}>
            <Card>
              <CardMedia component="img" height="140" image={menu.image} alt={menu.title} />
              <CardContent>
                <Typography variant="h6">{menu.title}</Typography>
                <Typography variant="body2" color="textSecondary">{menu.description}</Typography>
                <Button size="small" color="primary" href={menu.link} target="_blank">
                  View
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default MenuList
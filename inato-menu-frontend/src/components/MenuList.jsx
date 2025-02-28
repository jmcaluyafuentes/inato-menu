import { useState, useEffect } from 'react';
import { Container, Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const MenuList = () => {
  // Sample menu items (replace with API call later)
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("https://inato-menu-backend.onrender.com/menus");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMenus(data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  useEffect(() => {
    const cardMenus = document.querySelectorAll('.card-menu');
    const maxHeight = Array.from(cardMenus).reduce((max, cardMenu) => Math.max(max, cardMenu.clientHeight), 0);
    
    cardMenus.forEach(cardMenu => {
      cardMenu.style.height = `${maxHeight}px`;
    })
  })
    
  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: 'space-between',
          gap: { xs: 1, sm: 3, md: 4 },
        }}
      >
        {menus.map((menu) => (
          <Card className="card-menu" key={menu.id} sx={{ width: { xs: "48%", sm: "48%", md: "31%" } }}>
            <CardMedia component="img" height="140" image={menu.image} alt={menu.title} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', minHeight: 120, maxHeight: 300 }}>
              <Typography variant="h6">{menu.title}</Typography>
              <Typography variant="body1" color="textSecondary">{menu.description}</Typography>
              <Button size="small" color="primary" variant="outlined" href={menu.link} target="_blank" sx={{ mt: 'auto' }}>
                View
              </Button> 
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  )
}

export default MenuList;
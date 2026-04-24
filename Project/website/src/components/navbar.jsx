import { AppBar, Toolbar, Container, Typography, Box, Button } from "@mui/material";
import Colors from "../constants/colors";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function Navbar() {

  const mainColor = Colors.primary;
  
  const {HandleLogout}= useContext(AuthContext); 

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        border: `3px solid ${mainColor}`,
        // boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        borderRadius: 3,
        mt: 2,
        
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 70,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box textAlign="center">
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: mainColor,
                letterSpacing: 0.8,
              }}
            >
              Student Corner
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                letterSpacing: 1,
              }}
            >
              Expense Dashboard
            </Typography>
            <Button variant="outlined" onClick={()=>HandleLogout()}>Log Out</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");

  const {HandleLogin} = useContext(AuthContext); 
  return (
    <Box>
      <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <Button variant="contained" onClick={()=>HandleLogin(username, password)}>Submit</Button>
    </Box>
  );
}

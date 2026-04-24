import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Button, TextField, MenuItem, Alert } from '@mui/material';
import { useState } from 'react';
import Colors from '../constants/colors';
import { InsertSingleData } from '../utils/insertData';
import AlertMessage from './alertMessage';
import { useNavigate } from 'react-router-dom';

export default function AddDataForm() {

  const navigate = useNavigate();

  const [exp, setExp] = useState(0);
  const [date, setDate] = useState(dayjs());
  const [type, setType] = useState("Sell");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); 
  const [alertType, setAlertType] = useState("error"); 

  async function handleOnClick(){
    if(exp === 0 || exp === ''){
      setShowAlert(true);
      setAlertMessage("Expense Must not be Empty");
      return;
    }

    const [success, result] = await InsertSingleData(date, exp, type);

    if(success){
      setShowAlert(true);
      setAlertMessage("Inserted Successfully");
      setAlertType("success");
      setTimeout(()=>{
        navigate("/analytics",{ state: { refresh: true } });
      },1000);
    }else{
      setShowAlert(true);
      setAlertMessage("Insert Failed");
    }
  }

  return (
    <>
      {showAlert && (
        <AlertMessage type={alertType} title={alertMessage} />
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={date}
          onChange={(newValue)=>setDate(newValue)}
        />
      </LocalizationProvider> 

      <TextField
        label="Expense"
        type="number"
        value={exp}
        onChange={(e)=>setExp(e.target.value)}
        variant='outlined'
        sx={{ my: 1 }}
        fullWidth
      />

      {/* Buy/Sell Dropdown */}
      <TextField
        select
        label="Type"
        value={type}
        onChange={(e)=>setType(e.target.value)}
        sx={{ my: 1 }}
        fullWidth

      >
        <MenuItem value="Buy">Buy</MenuItem>
        <MenuItem value="Sell">Sell</MenuItem>
      </TextField>

      <Button
        onClick={handleOnClick}
        sx={{
          mx: 'auto',
          backgroundColor: Colors.warning,
          color: 'white',
          '&:hover':{
            backgroundColor: Colors.info
          }
        }}
        style={{ width: '100%' }}
      >
        Submit
      </Button>
    </>
  )
}
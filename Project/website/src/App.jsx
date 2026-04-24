  import { Box, Container, Typography } from "@mui/material"
  import { useEffect, useState } from "react"; 
  import Navbar from "./components/navbar"
  import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
  import { fetchAllTransactionData } from "./utils/fetchdata"; 
  import { CalculateTotalBuy, CalculateTotalRevenue } from "./utils/moneyRelatedFunctions";
  import Sidepannel from "./components/sidepannel"
  import AnalyticsPage from "./pages/analytics"
  import DailyPage from "./pages/allDay"
  import MonthlyPage from "./pages/monthly"
  import { AuthProvider } from "./contexts/authContext";
import LoginPage from "./pages/loginpage";
import AuthProtectedRoute from "./routes/authRoute";

  function App() {

    const [alldata, setAllData] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);  // rev - exp 
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(()=>{
      fetchAllTransactionData().then(data => setAllData(data));
      console.log("Fetched data:", alldata); // Debugging log to check fetched data
    },[]);

    useEffect(()=>{
      const revenue = CalculateTotalRevenue(alldata);
      const sales = CalculateTotalBuy(alldata);
      setTotalRevenue(revenue);
      setTotalExpenses(sales); 
      setTotalProfit(revenue - sales);
    },[alldata]); 

    const Layout = () => (
      <Container maxWidth="xl">
        <Navbar />

        <Box style ={{display: "flex", flexDirection:"row", grid: 'flex'}}>

          {/* Side pannel */}
          <Sidepannel />

          <Outlet />

        </Box>

      </Container>
    )

    return (
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={
            <AuthProtectedRoute>
              <Layout />
            </AuthProtectedRoute>}>
            <Route index element={<AnalyticsPage alldata={alldata} totalRevenue={totalRevenue} totalProfit={totalProfit} totalExpenses={totalExpenses} />} />
            <Route path="/analytics" element={<AnalyticsPage alldata={alldata} totalRevenue={totalRevenue} totalProfit={totalProfit} totalExpenses={totalExpenses} />} />
            <Route path="/daily" element={ <DailyPage alldata={alldata}/>}/>
            <Route path="/monthly" element={<MonthlyPage alldata={alldata}/>} />
          </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    )
  }

  export default App;
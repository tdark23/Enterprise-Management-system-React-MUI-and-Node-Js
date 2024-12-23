import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admins from "scenes/admins";
import Performance from "scenes/performance";

function App() {
  // Fetch mode from Redux store and create corresponding theme.
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              {/* Navigate to dashboard when on root */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              {/* Render the Dashboard component */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products/>} />
              <Route path="/customers" element={<Customers/>} />
              <Route path="/transactions" element={<Transactions/>} />
              <Route path="/geography" element={<Geography/>} />
              <Route path="/overview" element={<Overview/>} />
              <Route path="/daily" element={<Daily/>} />
              <Route path="/monthly" element={<Monthly/>} />
              <Route path="/breakdown" element={<Breakdown/>} />
              <Route path="/admin" element={<Admins/>} />
              <Route path="/performance" element={<Performance/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

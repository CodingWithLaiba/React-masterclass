import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/navbar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Product from "./pages/Product";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} /> {/* Nested Route */}
            <Route path="settings" element={<Setting />} /> {/* Nested Route */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

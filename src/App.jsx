// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Head";  // Removed the extension
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Markets from "./pages/Markets.jsx";
import Trade from "./pages/Trade.jsx";
import Orders from "./pages/Orders.jsx";
import Funds from "./pages/Funds.jsx";
import Support from "./pages/Support.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Trade />} />
                    <Route path="/markets" element={<Markets />} />
                    <Route path="/trade" element={<Trade />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/support" element={<Support />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;

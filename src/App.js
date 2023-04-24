
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/Shop/Shop";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart/Cart";
import { Login } from "./pages/Account/Login";
import { ChangePass } from "./pages/Account/ChangePass";
import { Footer } from "./components/Footer";
import { LoginCart } from "./pages/Account/LoginCart";
import { ShopContextProvider } from "./context/Shop-context";
import { useState, useEffect } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const[login, setLogin] = useState(false);
  const existingAccount = JSON.parse(localStorage.getItem('account'));
  useEffect(()=>{
    const expirationTime = JSON.parse(localStorage.getItem('expirationTime'));
    const dateNow = new Date();
    if(dateNow.getTime() > expirationTime){
      setLogin(false);
    }
    else{
      
      setLogin(true);
    }
  });

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} login={login} setLogin = {setLogin} existingAccount={existingAccount}/>
          <Routes>
            <Route path="/" element={<Shop searchQuery={searchQuery} setSearchQuery={setSearchQuery} login={login}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart login={login} />} />
            <Route path="/login" element={<Login login={login} setLogin={setLogin} existingAccount={existingAccount}/>} />
            <Route path="/password" element={<ChangePass existingAccount={existingAccount}/>} />
            <Route path="/account" element={<LoginCart />} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
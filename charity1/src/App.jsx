import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import "./i18n";
// import { useTranslation } from "react-i18next";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
// import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
// import SignUp from "./pages/SignUp";
// import Admin from "./pages/Admin";
 

export default function App() {
  // const { i18n } = useTranslation();

 
  
  // useEffect(() => {
  //   document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  // }, [i18n.language]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />

       {/* <Route exact path="/contact" element={<Contact />} /> */}
        <Route exact path="/donate" element={<Donate />} />
        {/*<Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

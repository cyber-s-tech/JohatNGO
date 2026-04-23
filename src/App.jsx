import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopHeader from "./Components/Layouts/TopHeader";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import HomeComponents from "./Components/Pages/Home/HomeComponents";
import AboutComponents from "./Components/Pages/About/AboutComponents";
import WorkComponents from "./Components/Pages/Work/WorkComponents";
import EventComponents from "./Components/Pages/Event/EventComponents";
import ContactComponents from "./Components/Pages/Contact/ContactComponents";

function App() {
  return (
    <>
      <BrowserRouter>
      <TopHeader/>
      <Header/>
        <Routes>
          <Route path="/" element={<HomeComponents/>} />
          <Route path="/about-us" element={<AboutComponents />} />
          <Route path="/our-work" element={<WorkComponents />} />
          <Route path="/event" element={<EventComponents />} />
          <Route path="/contact" element={<ContactComponents />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

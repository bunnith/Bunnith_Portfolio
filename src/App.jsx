
// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
// import { Toast } from "./components/ui/toast";
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
    <>
       {/* <Toast /> */}
       <Toaster />
       <BrowserRouter>
       <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

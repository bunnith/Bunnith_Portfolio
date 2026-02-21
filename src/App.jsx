import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;

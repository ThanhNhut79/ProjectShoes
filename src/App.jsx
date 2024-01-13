import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Introduce from "./Pages/Introduce/Introduce";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Layout from "./Layout/Index";
import Contact from "./Pages/Contact/Contact";
import Detail from "./Pages/Detail/Detail";
import News from "./Pages/News/News";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/news" element={<News />} />
          <Route path="/product" element={<Product />} />
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

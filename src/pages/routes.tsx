import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "../layouts/Layout";
import Tea from "../components/Tea/Tea";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tea/:id" element={<Tea />} />
      </Routes>
       </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "../layouts/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;

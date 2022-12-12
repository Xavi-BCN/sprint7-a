import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Budgets from '../pages/budgets';
import { Navbar } from '../components/Navbar';

const Router =  () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={process.env.PUBLIC_URL}>
        <Route path="" element={<Home />} />
        <Route path="budgets/" element={<Budgets />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
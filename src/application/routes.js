import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Budgets from '../pages/budgets';
import Page2 from '../pages/page2';

//import App from '../App';

const Router =  () => (
  <BrowserRouter>
    <Routes>
      <Route path={process.env.PUBLIC_URL}>
        <Route path="" element={<Home />} />
        <Route path="budgets/" element={<Budgets />} />
        <Route path="page2/" element={<Page2 />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
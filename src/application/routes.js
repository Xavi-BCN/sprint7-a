import { BrowserRouter, Route, Routes } from 'react-router-dom';
import home from '../pages/home';

import App from '../App';

const Router =  () => (
  <BrowserRouter>
    <Routes>
      <Route path={process.env.PUBLIC_URL}>
        <Route path="" element={<home />} />
        <Route path="presupostos/" element={<page2 />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
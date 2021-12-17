import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { pages } from "./route.config.json";
import Doc from './pages/doc';

const PageRoutes = (props) => {
  return (
    <Routes {...props}>
      {
        pages.map((page) => (
          <Route
            key={page.md_key}
            element={<Doc pageKey={page.md_key} />}
            path={page.path}
          />
        ))
      }
    </Routes>
  )
};

export default PageRoutes;
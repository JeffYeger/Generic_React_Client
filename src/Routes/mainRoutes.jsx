import { Route, Routes } from "react-router-dom";

import React from "react";

function mainRoutes() {
  return (
    <Routes>
      <Route path="/sample" element={<SampleElement />} />
    </Routes>
  );
}

export default mainRoutes;

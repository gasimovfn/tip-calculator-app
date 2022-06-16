import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes";

const Content = () => {
  return (
    <>
      <Suspense>
        <Routes>
          {routes?.map(({ path, element }, i) => {
            return <Route key={i} path={path} element={element} />;
          })}
        </Routes>
      </Suspense>
    </>
  );
};

export default Content;

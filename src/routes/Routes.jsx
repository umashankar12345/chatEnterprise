import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/common/Login";
import Signup from "../pages/common/Signup";
import Home from "../pages/common/Home";
import Carousel from "../pages/common/Carousel";
import Home2 from "../pages/common/Home2";

//enterprise imports
const EnterpriseHome = lazy(() => import("../pages/enterprise/home/Home"));
const EnterpriseSettings = lazy(() =>
  import("../pages/enterprise/setting/Setting")
);
const EnterpriseMyTransactions = lazy(() =>
  import("../pages/enterprise/transaction/Transaction")
);
const EnterpriseNewyorkTime = lazy(() =>
  import("../pages/enterprise/newyorkTime/NewYorkTime")
);
const EnterpriseNewyorkTimePendingREquests = lazy(() =>
  import("../pages/enterprise/newyorkTime/PendingRequests")
);

function routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Carousel />} /> */}
            <Route path="login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route
            element={
              <PrivateRoute>
                <Home2 />
              </PrivateRoute>
            }
          >
            <Route path="/enterprise">
              <Route
                index
                element={
                  <PrivateRoute>
                    <EnterpriseHome />
                  </PrivateRoute>
                }
              />
              <Route
                path="home"
                element={
                  <PrivateRoute>
                    <EnterpriseHome />
                  </PrivateRoute>
                }
              />
              <Route path="settings" element={<EnterpriseSettings />} />
              <Route
                path="mytransactions"
                element={<EnterpriseMyTransactions />}
              />
              <Route path="newyorktime" element={<EnterpriseNewyorkTime />} />
              <Route
                path="newyorktime-pendingrequests"
                element={<EnterpriseNewyorkTimePendingREquests />}
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default routes;

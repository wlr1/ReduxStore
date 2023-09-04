import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
import Home from "./Components/Home/Home";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./Components/Cart/Cart")
);
const FullProduct = React.lazy(
  () =>
    import(
      /* webpackChunkName: "FullProduct" */ "./Components/FullProduct/FullProduct"
    )
);
const NotFound = React.lazy(
  () =>
    import(/* webpackChunkName: "NotFound" */ "./Components/NotFound/NotFound")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </React.Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </React.Suspense>
        ),
      },
      {
        path: "/pizza/:id",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <FullProduct />
          </React.Suspense>
        ),
      },
    ],
  },
]);

const rootEl = document.getElementById("root");

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

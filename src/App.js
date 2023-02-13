import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router";

import { checkUserSession } from "./store/user/user.action";

import { Home, Navigation, Authentication, Shop, Checkout } from "./routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

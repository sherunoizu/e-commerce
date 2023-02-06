import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router";

import {
  onAuthStateChangedLisntener,
  createUserDocumentFromAuth,
} from "./utils";

import { Home, Navigation, Authentication, Shop, Checkout } from "./routes";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsrcibe = onAuthStateChangedLisntener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubsrcibe;
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

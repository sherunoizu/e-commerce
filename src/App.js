import { Routes, Route } from "react-router";

import { Home, Navigation, SignIn } from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

import { Routes, Route } from "react-router";
import Home from "./routes/home/home.component";

const Shop = () => <div>I am from shop page</div>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;

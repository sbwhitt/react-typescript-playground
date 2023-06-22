import { Routes, Route, Navigate } from "react-router-dom";
import Root from "./routes/root/root";
import One from "./routes/one/one";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
      </Route>
      <Route path="one" element={<One />}/>
    </Routes>
  );
}

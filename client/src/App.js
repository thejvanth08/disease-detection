import { Routes, Route } from "react-router-dom";
import { DiseaseAnalysis, Error } from "./pages";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

// send credentials like cookies to server which is from different origin
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DiseaseAnalysis />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};
export default App;

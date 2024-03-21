import { Route, Routes } from "react-router-dom";
import Home from "./component/common/Home";

function App(props) {
  return(
    <Routes>
      <Route path="/" Component={Home}/>
    </Routes>
  )
}
export default App;
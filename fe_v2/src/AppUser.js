import RealTimeDashBoard from "./pages/RealTimeDashBoard";
import Header from "./component/Header";
import { useParams, Routes, Route } from "react-router-dom";
import RemoveSpecialCharacters from "./utils/RemoveSpecialCharacters";
function AppUser() {
  return (
    <div className="App">
      <Header />
      <RealTimeDashBoard />
    </div>
  );
}

export default AppUser;

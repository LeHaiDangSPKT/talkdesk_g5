import React from "react";
import DisplayStaff from "./pages/Admin/DisplayStaff";
import AddStaff from "./pages/Admin/AddStaff";
import { useParams, Routes, Route } from "react-router-dom";
import RemoveSpecialCharacters from "./utils/RemoveSpecialCharacters";
function AppAdmin() {
  const dict = {
    AddStaff: { src: <AddStaff /> },
  };
  const Element = () => {
    let params = useParams();
    if (params.slug == undefined) return;
    params = RemoveSpecialCharacters(params.slug);
    return dict[params].src;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<DisplayStaff />} />
        <Route path="/admin/:slug" element={<Element />} />
      </Routes>
    </div>
  );
}

export default AppAdmin;

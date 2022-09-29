import {
  MenuBar,
  SideBar,
  VideosContainer,
  VideoPlayer,
  SearchResults,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Data from "./data.json";
function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<VideosContainer videos={Data} />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
        <Route
          path="/searchresults"
          element={<SearchResults videos={Data} />}
        />
        <Route path="*" element={<div>This page does not exist!!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Post from "./pages/Post"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/post/:post_id" element={<Post />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </>);
}

export default App;
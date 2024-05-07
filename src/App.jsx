import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./page/Blog/Blog.jsx";
import Main from "./page/Main/Main.jsx";
import Projects from "./page/Projects/Projects.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}></Route>
              <Route path='blog' element={<Blog/>}></Route>
              <Route path='projects' element={<Projects/>}></Route>
          </Routes>
      </BrowserRouter>

  )
}

export default App

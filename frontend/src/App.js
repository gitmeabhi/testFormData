import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Bookings from "./components/Bookings"

import './App.css';

const App = () =>(
   <div>
    <BrowserRouter>
   
   <Routes>
   <Route  path = "/" element = {<Home />} />
   <Route  path = "/bookings" element = {<Bookings />} />
   </Routes>

 </BrowserRouter>
   </div>
  )

export default App;

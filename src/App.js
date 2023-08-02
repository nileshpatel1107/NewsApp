import React, { useState } from 'react'
import Navbar from './component/Navbar.js'
import News from './component/News.js'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router
  , Route
  , Routes

} from "react-router-dom";
// import { Switch } from "react-router-dom";
const App = () => {
  const pagesize = 5;

  const [progress, setProgress] = useState(10);


  console.log(progress)


  return (
    <>
      <Navbar />
      <Router>

        <div>
          <LoadingBar color='#f11946' progress={setProgress} />
        </div>
        <Routes>
          <Route exact path="/"><News progress={setProgress} pagesize={pagesize} category={"general"} /></Route>

          <Route exact path="/business"><News progress={setProgress} pagesize={pagesize} category={"business"} /></Route>
          <Route exact path="/entertainment"><News progress={setProgress} pagesize={pagesize} category={"entertainment"} /></Route>
          <Route exact path="/general"><News progress={setProgress} pagesize={pagesize} category={"general"} /></Route>
          <Route exact path="/health"><News progress={setProgress} pagesize={pagesize} category={"health"} /></Route>
          <Route exact path="/science"><News progress={setProgress} pagesize={pagesize} category={"science"} /></Route>
          <Route exact path="/sports"><News progress={setProgress} pagesize={pagesize} category={"sports"} /></Route>
          <Route exact path="/technology"><News progress={setProgress} pagesize={pagesize} category={"technology"} /></Route>

        </Routes>
      </Router>

    </>
  )

}
export default App;
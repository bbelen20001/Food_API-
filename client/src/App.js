import {Home,Detail,Landing,Form} from "./views"
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
     {location.pathname !== "/" && <NavBar/>}
     <Route exact path="/"  component={Landing}/>
     <Route exact path="/home/:id"   component={Detail}/>
     <Route exact path="/create"  component={Form}/>
     <Route exact path="/home"  component={Home}/>
    {/* <Route path="/home" render={()=> <Home/>} /> */}
  
    </div>
  );
}

export default App;

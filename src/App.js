import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from "react-router-dom";
import { Home } from "./views/Home";
import { NewGoals } from "./views/NewGoals";
import { dataLoader, Settings } from "./views/Settings";
import { Statistics } from "./views/Statistics";

const Root = ()=>{
  return <>
    <div className="nav-bar" style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>
    </div>

    <div className="route-display">
      <Outlet></Outlet>
    </div>
  </>
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path="/new-goals" element={<NewGoals/>}/>
        <Route path="/settings" loader={dataLoader} element={<Settings/>}/>
        <Route path="/statistics" element={<Statistics/>}/>
      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;


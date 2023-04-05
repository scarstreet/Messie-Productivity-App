import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { dataLoader, Settings } from "./pages/Settings";
import { Statistics } from "./pages/Statistics";
import { AppBar } from "./components/AppBar";

const Root = ()=>{
  return <>
    {/* <div className="nav-bar" style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
      <Link to="/">Home</Link>
      <Link to="/settings">Settings</Link>
    </div> */}
    <AppBar />

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
        <Route path="/login" element={<Login/>}/>
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


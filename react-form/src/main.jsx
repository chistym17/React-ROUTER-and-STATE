import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Applied from './components/AppliedJobs/applied';
import Errorpage from './components/Errorpage';
import JobDetail from './components/jobdetails/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
errorElement:<Errorpage></Errorpage>,
    children :[
{
path:'/',
element: <Home></Home>,

},

{
path:'/applied',
element: <Applied></Applied>,

},

{
path:'/job/:id',
element:<JobDetail></JobDetail>,
loader:()=>fetch('../jobs.json')


}

]


  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

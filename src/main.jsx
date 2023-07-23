import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Admission from './components/Admission/Admission';
import MyCollege from './MyCollege/MyCollege';
import Colleges from './components/Colleges/Colleges';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "header",
        element: <Header></Header>
      },
      {
        path: "footer",
        element: <Footer></Footer>,
      },
      {
        path: "admission",
        element: <Admission></Admission>
      },
      {
        path: "myCollege",
        element: <MyCollege></MyCollege>
      },
      {
        path: "colleges",
        element: <Colleges></Colleges>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto container'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)


import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Interface from './components/Interface';
import Registeragent from './components/services/Registeragent';
import RootLayout from './components/RootLayout';
import CriminalLaw from './components/services/CriminalLaw';
import Offences from './components/services/Offences';
import Litigation from './components/services/Litigation';
import Nonlitigation from './components/services/Nonlitigation';
import Laborsdisputes from './components/services/Labordisputes';
import BussinesDispute from './components/services/BussinesDispute';
import Contracts from './components/services/Contracts';
import FreeAid from './components/services/FreeAid';



const router = createBrowserRouter([

  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Interface/>
      },
     
      {
        path:"registeragent",
        element:<Registeragent/>
      },
      {
        path:"criminalLaw",
        element:<CriminalLaw/>
      },
      {
        path:"offences",
        element:<Offences/>
      },
      {
        path:"litigation",
        element:<Litigation/>
      },
      {
        path:"nonlitigation",
        element:<Nonlitigation/>
      },
       {
        path:"labordisputes",
        element:<Laborsdisputes/>
       },
       {
        path:"bussinesdispute",
        element:<BussinesDispute/>
       },
       {
        path:"contracts",
        element:<Contracts/>
       },
       {
        path:"freeaid",
        element:<FreeAid/>
       }


    ]

  },
  

])


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;


import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';

import OnyxLanding from './components/Home/home'
import OnyxTeam from './components/Team/team'
import DrAhmed from './components/AboutFor/drAhmed';
import Projects from './components/Projects/projects';



function App() {

  const routes = createBrowserRouter([
   {path:'/', element:<OnyxLanding/>},
   {path:'team', element:<OnyxTeam/>},
   {path:'ahmed_swidan', element:<DrAhmed/>},
   {path:'projects', element:<Projects/>}
 
  ])
  
  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
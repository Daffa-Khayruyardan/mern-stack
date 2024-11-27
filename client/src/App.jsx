import React from 'react';
import {createBrowserRouter,createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';

// import layouts
import HomeLayouts from './layouts/HomeLayouts';
import AuthLayouts from './layouts/AuthLayouts';

// import pages
import Homepage from './pages/Homepage';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Register from './pages/Register';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* hompage layout */}
      <Route path='/' element={<HomeLayouts />}>
        {/* homepage routes */}
        <Route path='home' element={<Homepage />} />
        <Route path='add' element={<AddContact />} />
        <Route path='edit/:id' element={<EditContact />} />
      </Route>

      {/* auth layout */}
      <Route path='/' element={<AuthLayouts />} >
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

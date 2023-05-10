import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Ragister from './Ragistration/Ragister';
import Login from './Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          element: <Ragister/>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'ragister',
          element: <Ragister/>
        },
      ]
    }
  ])
  return (
    <div className="">
      

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

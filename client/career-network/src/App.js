import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
     <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
  </div>
)

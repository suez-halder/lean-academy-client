import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-screen-xl mx-auto'>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
)

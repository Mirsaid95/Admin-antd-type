import { Routes, Route } from 'react-router-dom'
import { Login } from './auth/login/login'
import {MainLayout} from './layout/main-layout'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout/>}>
        </Route>
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { Login } from './auth/login/login'
import { MainLayout } from './layout/main-layout'
import { Routers } from './router/router'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/app' element={<MainLayout />}>
          {Routers.map(({ component: Element, id, path }) => (
            <Route index={path ? false : true}
              path={path}
              key={id}
              element={<Element />} />
          )
          )}
        </Route>
      </Routes>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DefaultLayout from './layouts/DefaultLayout'
import ContactsPage from './pages/ContactsPage'
import ProductsPage from './pages/ProductsPage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/products' element={<ProductsPage />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}


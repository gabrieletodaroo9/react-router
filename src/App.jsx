import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import DefaultLayout from './layouts/DefaultLayout'
import ContactsPage from './pages/ContactsPage'
import ProductsPage from './pages/ProductsPage'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {

  const [data, setData] = useState([])
  const [activeCategory, setActiveCategory] = useState("tutte le categorie")
  const [search, setSearch] = useState("")

  const endpoint = "https://fakestoreapi.com/products"



  useEffect(() => {
    axios.get(endpoint)
      .then(res => {
        const modifiedData = res.data.map(obj => {
          const shortDescription = obj.description.split(" ").length > 10 ? obj.description.split(" ").slice(0, 10).join(" ") + '...' : obj.description
          return {
            ...obj,
            description: shortDescription
          };
        });
        setData(modifiedData);

      })
      .catch(err => console.log(err));

  }, [])

  const uniqueCategories = []
  data.forEach(obj => {
    if (!uniqueCategories.includes(obj.category))
      uniqueCategories.push(obj.category)
  })



  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage data={data} />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/products' element={<ProductsPage setActiveCategory={setActiveCategory} uniqueCategories={uniqueCategories} search={search} setSearch={setSearch} />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}


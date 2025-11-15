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
  const [activeCategory, setActiveCategory] = useState("All categories")
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState([])

  const endpoint = "https://fakestoreapi.com/products"

  const uniqueCategories = ["All categories"]
  data.forEach(obj => {
    if (!uniqueCategories.includes(obj.category))
      uniqueCategories.push(obj.category)
  })


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

  useEffect(() => {

    let current = data;
    if (activeCategory !== "All categories") {
      current = current.filter(obj => obj.category === activeCategory)
    }
    const searchFiltered = current.filter(obj => obj.title.toLowerCase().includes(search.toLowerCase()))
    setFiltered(searchFiltered)
  }, [activeCategory, search, data])




  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage data={data} />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/products' element={<ProductsPage filtered={filtered} setActiveCategory={setActiveCategory} uniqueCategories={uniqueCategories} search={search} setSearch={setSearch} />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}


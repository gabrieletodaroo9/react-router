import Card from "../components/Card";

export default function ProductsPage({ setActiveCategory, uniqueCategories, search, setSearch, filtered }) {


    return (
        <>
            <div className="container p-3">
                <form className="form-inline p-3" >
                    <label className="my-1 me-3" htmlFor="categorySelect">Categorie:</label>
                    <select className="custom-select my-1 mr-sm-2 p-2" id="categorySelect" onChange={e => (setActiveCategory(e.target.value))} >
                        {uniqueCategories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <div className="input-group my-3">
                        <input type="text" className="form-control" placeholder="Search for title..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </form>
            </div>

            <div className="container">
                <div className="row g-5 mb-5">
                    {
                        filtered.map(obj => (
                            <Card key={obj.id} obj={obj} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
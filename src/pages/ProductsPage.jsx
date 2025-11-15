import Card from "../components/Card";

export default function ProductsPage({ setActiveCategory, uniqueCategories, search, setSearch, filtered }) {


    return (
        <><main className="bg-second">
            <div className="container p-3">
                <h2 className="text-center text-first fs-1 fw-bold pt-4">I nostri prodotti</h2>
                <form className="d-flex align-items-center p-3" >
                    <label className="my-1 me-2 fw-bold" htmlFor="categorySelect">Category:</label>
                    <select className="custom-select my-1 mr-sm-2 p-2 me-5 rounded-pill" id="categorySelect" onChange={e => (setActiveCategory(e.target.value))} >
                        {uniqueCategories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                    <div className="input-group my-3">
                        <input type="text" className="form-control p-2 rounded-pill ps-3" placeholder="Search for title..." value={search} onChange={e => setSearch(e.target.value)} />
                    </div>
                </form>
            </div>

            <div className="container">
                <div className="row g-5 pb-5">
                    {
                        filtered.map(obj => (
                            <Card key={obj.id} obj={obj} />
                        ))
                    }
                </div>
            </div>
        </main >
        </>
    )
}
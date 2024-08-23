import React, { useEffect, useState } from 'react'

function Api() {
    let [product, setProduct] = useState([])
    let [categories, setCategories] = useState([])
    let getAPIData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setProduct(data))

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    },[])
    return (
        <>
            <div className='container'>
                <h1>Get Data From API </h1> <hr />
                {/* <button className='btn btn-primary' onClick={getAPIData}>Load Data</button> */}
                <div className='container'>
                    <div className='row'>
                        {categories.map((cat) =>
                            <div className="col-2 fs-4">
                                <div className='px-2'><span className='btn btn-secondary'>{cat}</span></div>
                            </div>
                        )}

                    </div>
                </div>
                <div className="container">
                    <div className='row'>
                        {product.map((pro) =>
                            <div className="col-2 py-2">

                                <div className="card">
                                    <div className='image-area'>
                                        <img src={pro.image} alt="Avatar" style={{ width: '100%' }} />
                                    </div>
                                    <div className="container">
                                        <h4><b>{pro.category}</b></h4>
                                        <p>{pro.price}</p>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Api
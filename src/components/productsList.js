import React from 'react'
import ProductCard from './productsCard'

import { Link } from "react-router-dom"

export default function ProductsList(props){
    return (
        <main className="l-container">
            <section className="l-card-section">
                <h1 className="t-title">Produtos em Promoção</h1>
                <div className="l-card-container u-justify-content-around">
                    {props.products.map(product => (
                        <Link to={`/${product.id}`}>
                            <ProductCard
                                img={product.img}
                                description={product.description}
                                price={product.price}
                            />
                        </Link>
                    ))}
                </div>
            </section>
            <section className="l-card-section">
                <h1 className="t-title">Nossas Novidades</h1>
                <div className="l-card-container u-justify-content-around">
                    {props.products.map(product => (
                        <Link to={`/${product.id}`}>
                            <ProductCard
                                img={product.img}
                                description={product.description}
                                price={product.price}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
import React from 'react'
import ProductCard from './productsCard'

import image01 from '../assets/product01.jpg'
import image02 from '../assets/product02.jpg'
import image03 from '../assets/product03.jpg'
import image04 from '../assets/product04.jpg'

export default function ProductsList(){
    const products = ([
        {
            'img': `${image01}`,
            'price': '7,50',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            'img': `${image02}`,
            'price': '8,25',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            'img': `${image03}`,
            'price': '5,00',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            'img': `${image04}`,
            'price': '7,00',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
    ])

    return (
        <main className="l-container">
            <section className="l-card-section">
                <h1 className="t-title">Produtos em Promoção</h1>
                <div className="l-card-container u-justify-content-around">
                    {products.map(product => (
                        <ProductCard
                            img={product.img}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
            <section className="l-card-section">
                <h1 className="t-title">Nossas Novidades</h1>
                <div className="l-card-container u-justify-content-around">
                    {products.map(product => (
                        <ProductCard
                            img={product.img}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}
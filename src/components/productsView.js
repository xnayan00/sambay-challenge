import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function ProductsView(props){
    let { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        props.products.forEach(el => {
            if(el.id === parseInt(id)){        
                setProduct(el)
            }
        });
    })
    
    return (
        <div className="l-container">
            {product !== null && (
                <>
                    <h2 className="c-product-name t-title u-pt-2 u-pl-2">
                        <Link to="/">
                            {product.name}
                        </Link>
                    </h2>
                    <section className="u-container-flex u-justify-content-around u-pt-2">
                        <article className="l-product-container">
                            <figure className="c-product-image">
                                <img src={product.img} alt="Imagem do produto"/>
                            </figure>
                        </article>
                        <article className="l-product-container">
                            <div className="c-product-details">
                                <div className="c-price-detail">
                                    <small className="t-caption u-color-primary u-bold u-pt-1 u-pl-1">
                                        Produto {product.state}
                                    </small>
                                    <div className="c-price-content">
                                        <p className="t-title u-color-primary u-bold u-p-1 u-pl-3">R$ {product.price}</p>
                                        <small className="t-caption">Em até 2x</small>
                                    </div>
                                    <footer className="c-price-footer"></footer>
                                </div>
                                <div className="c-description-detail">
                                    <h2 className="t-title u-color-primary u-p-1">Descrição</h2>
                                    <p className="t-body u-body-large u-pl-3 u-pr-3 u-pb-1">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="c-info-detail u-pb-5">
                                    <h2 className="t-title u-color-primary u-p-1">Detalhes do produto</h2>
                                    <ul className="c-info-list u-pl-3 u-pr-3">
                                        <li className="c-info-list-item t-body u-bold">
                                            Categorias:
                                            <span className="u-regular"> {product.details.category}</span>
                                        </li>
                                        <li className="c-info-list-item t-body u-bold">
                                            Peso:
                                            <span className="u-regular"> {product.details.weight}</span>
                                        </li>
                                        <li className="c-info-list-item t-body u-bold">
                                            Tamanho:
                                            <span className="u-regular"> {product.details.size}</span>
                                        </li>
                                        <li className="c-info-list-item t-body u-bold">
                                            Material:
                                            <span className="u-regular"> {product.details.material}</span>
                                        </li>
                                        <li className="c-info-list-item t-body u-bold">
                                            Marca:
                                            <span className="u-regular"> {product.details.createdBy}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </section>
                </>

            )}
        </div>
    )
}
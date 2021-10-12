import React from 'react'

export default function ProductCard(props){
    return (
        <div className="c-card u-mt-10">
            <figure className="c-card-image">
                <img src={props.img} alt="imagem do produto"/>
            </figure>
            <div className="c-card-content">
                <div>
                    <p className="t-body">{props.description}</p>
                </div>
                <div>
                    <p className="t-subtitle u-mt-10">R${props.price}</p>
                    <small className="t-caption">Em até 2x</small>
                </div>
            </div>
            <footer className="c-card-footer">
                <span className="t-caption u-color-white">Promoção</span>
            </footer>
        </div>
    )
}
import React from 'react'

export default function ProductCard(props){

    function showConverted(str) {
        if(str.length > 100){
            return str.slice(0, 100) + '...'
        }else{
            return str
        }
    }

    return (
        <div className="c-card">
            <figure className="c-card-image">
                <img src={props.img} alt="imagem do produto"/>
            </figure>
            <div className="c-card-content">
                <div>
                    <p className="t-body">{showConverted(props.description)}</p>
                </div>
                <div>
                    <p className="t-subtitle u-mt-10 u-pt-1">R${props.price}</p>
                    <small className="t-caption">Em até 2x</small>
                </div>
            </div>
            <footer className="c-card-footer">
                <span className="t-caption u-color-white">Promoção</span>
            </footer>
        </div>
    )
}
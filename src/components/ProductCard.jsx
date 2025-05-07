import React from 'react';
import productImageDesktop from '../assets/image-product-desktop.jpg';
import productImageMobile from '../assets/image-product-mobile.jpg';
import iconCart from '../assets/icon-cart.svg';
import './ProductCard.css';

function ProductCard() {
    return (
        <article className="product-card">
            <picture className="product-card__image-container">
                <source media="(max-width: 767px)" srcSet={productImageMobile} />
                <img className="product-card__image" src={productImageDesktop} alt="Imagen del perfume" />
            </picture>
            <div className="product-card__content">
                <span className="product-card__category montserrat-500">Perfume</span>
                <h1 className="product-card__title fraunces-700">Gabrielle Essence Eau De Parfum</h1>
                <p className="product-card__description montserrat-500">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="product-card__price">
                    <span className="product-card__current-price fraunces-700">$149.99</span>
                    <span className="product-card__original-price montserrat-500">$169.99</span>
                </div>
                <button className="product-card__button montserrat-700">
                    <img src={iconCart} alt="Ícono de carrito" className="product-card__button-icon" />
                    Add to Cart
                </button>
            </div>
        </article>
    );
}

export default ProductCard
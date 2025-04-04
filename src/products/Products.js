import './products.css';
import { useState } from 'react';

import banner from './img/banner2.jpg';
import cotton from './img/cotton.jpg';
import poly from './img/poly.jpg';
import nylon from './img/nylon.jpg';
import functional from './img/functional.jpg';
import mixed from './img/mixed.jpg';
import cottoncontent from './img/001.png';
import polycontent from './img/002.png';
import nyloncontent from './img/003.png';
import functionalcontent from './img/004.png';
import mixedcontent from './img/005.png';
import Productlist from './Productslist';

const products = [
    <>
        <div className="products-product-title">COTTON</div>
        <div className="products-product-title-line"></div>
        <div className="products-product-detail"><img src={cottoncontent}/></div>
    </>,<>
        <div className="products-product-title">POLYESTER</div>
        <div className="products-product-title-line"></div>
        <div className="products-product-detail"><img src={polycontent}/></div>
    </>,<>
        <div className="products-product-title">NYLON</div>
        <div className="products-product-title-line"></div>
        <div className="products-product-detail"><img src={nyloncontent}/></div>
    </>,<>
        <div className="products-product-title">FUNCTIONAL FABRIC</div>
        <div className="products-product-title-line"></div>
        <div className="products-product-detail"><img src={functionalcontent}/></div>
    </>,<>
        <div className="products-product-title">MIXED FABRIC</div>
        <div className="products-product-title-line"></div>
        <div className="products-product-detail"><img src={mixedcontent}/></div>
    </>
]

const menuProduct = [
    [cotton, 'COTTON'], [poly, 'POLYESTER'], [nylon, 'NYLON'], [functional, 'FUNCTIONAL'], [mixed, 'MIXED']
];
// const menuProduct = Object.values(Productslist).map((product, idx) => {
//     return [JSON.stringify(product.key), JSON.stringify(product.key)];
// });
console.log(Productlist)

function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="products">
            <div className="products-banner"
            style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div>PRODUCTS</div>
            </div>

            <div className='products-content'>
                {/* 왼쪽 메뉴 부분 */}
                <div className="products-leftmenu">
                    {menuProduct.map((product, idx) => (
                        <div
                        className={`products-menu ${currentIndex === idx ? 'selected' : ''}`}
                        onClick={()=>setCurrentIndex(idx)}
                        style={{
                            backgroundImage: `url(${product[0]})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}><div className='products-leftmenu-product'>{product[1]}</div></div>
                    ))}
                </div>

                {/* 제품 목록 부분 */}
                <div className="products-products">
                    {products.map((product,idx) => (
                        <div 
                        key={idx}
                        className={`products-product ${idx === currentIndex ? 'selected' : ''}`}
                        style={{
                            opacity: idx === currentIndex ? 1 : 0,
                            transition: 'opacity 1s ease-in-out'
                        }}>
                            {product}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products
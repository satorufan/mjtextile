import './products.css';
import { useEffect, useState } from 'react';

import banner from './img/banner2.jpg';
// import cotton from './img/cotton.jpg';
// import poly from './img/poly.jpg';
// import nylon from './img/nylon.jpg';
// import functional from './img/functional.jpg';
// import mixed from './img/mixed.jpg';
// import cottoncontent from './img/001.png';
// import polycontent from './img/002.png';
// import nyloncontent from './img/003.png';
// import functionalcontent from './img/004.png';
// import mixedcontent from './img/005.png';
import Productslist from './Productslist';

// const products = [
//     <>
//         <div className="products-product-title">COTTON</div>
//         <div className="products-product-title-line"></div>
//         <div className="products-product-detail"><img src={cottoncontent}/></div>
//     </>,<>
//         <div className="products-product-title">POLYESTER</div>
//         <div className="products-product-title-line"></div>
//         <div className="products-product-detail"><img src={polycontent}/></div>
//     </>,<>
//         <div className="products-product-title">NYLON</div>
//         <div className="products-product-title-line"></div>
//         <div className="products-product-detail"><img src={nyloncontent}/></div>
//     </>,<>
//         <div className="products-product-title">FUNCTIONAL FABRIC</div>
//         <div className="products-product-title-line"></div>
//         <div className="products-product-detail"><img src={functionalcontent}/></div>
//     </>,<>
//         <div className="products-product-title">MIXED FABRIC</div>
//         <div className="products-product-title-line"></div>
//         <div className="products-product-detail"><img src={mixedcontent}/></div>
//     </>
// ]

// const menuProduct = [
//     [cotton, 'COTTON'], [poly, 'POLYESTER'], [nylon, 'NYLON'], [functional, 'FUNCTIONAL'], [mixed, 'MIXED']
// ];
const menuProduct = Object.entries(Productslist) // Productslist의 각 카테고리 (key, value) 쌍을 가져옴
//   .flatMap(([category, products]) =>  // category는 카테고리 이름, products는 해당 카테고리의 제품 배열
//     products.map(product => {
//       // 각 product에서 필요한 정보를 추출
//       const itemcode = product.itemcode || "No Itemcode";
//       const width = product.width || "No Width";  // 값이 없으면 "No Width"
//       const weight = product.weight || "No Weight";  // 값이 없으면 "No Weight"
      
//       return [
//         JSON.stringify(category),  // 카테고리 이름을 문자열로 포함
//         JSON.stringify(itemcode),
//         JSON.stringify(width),
//         JSON.stringify(weight)
//       ]; // category, itemcode, width, weight를 포함한 배열 반환
//     })
//   );
console.log(menuProduct)

function Products() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleIndex, setVisibleIndex] = useState(currentIndex);

    useEffect(() => {
        setVisibleIndex(currentIndex);
    }, [currentIndex]);

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
                            backgroundImage: `url(${product[1].img})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}><div className='products-leftmenu-product'>{product[1].name.slice(0, product[1].name.indexOf(' ') !== -1 ? product[1].name.indexOf(' ') : product[1].name.length)}</div></div>
                    ))}
                </div>

                {/* 제품 목록 부분 */}
                {/* <div className="products-products">
                    {menuProduct.map((product,idx) => (
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
                </div> */}
                <div className="products-products">
                    {menuProduct.map((product,idx) => (
                        <div
                            key={idx}
                            className={`products-product ${idx === currentIndex ? 'selected' : ''}`}
                            style={{
                                opacity: idx === visibleIndex ? 1 : 0,
                                visibility: idx === visibleIndex ? 'visible' : 'hidden',
                                transition: 'opacity 1s ease-in-out, visibility 0s 0.5s', // opacity는 1초로 애니메이션, visibility는 1초 뒤에 바뀌도록
                            }}
                        >
                            {/* <div className="products-product-title">{product[1].name}</div> */}
                            {/* <div className="products-product-title-line"></div> */}
                            <div className="product-table">
                                {/* Header */}
                                <div className="product-row product-header">
                                    <div className="product-cell itemcode">ITEMCODE</div>
                                    <div className="product-cell description">DESCRIPTION</div>
                                    <div className="product-cell width">WIDTH(mm)</div>
                                    <div className="product-cell weight">WEIGHT(g/sqm)</div>
                                </div>

                                {/* Items */}
                                {product[1].items.map((item, idx) => (
                                    <div className="product-row" key={idx}>
                                        <div className="product-cell itemcode">{item.itemcode}</div>
                                        <div className="product-cell description">{item.description}</div>
                                        <div className="product-cell width">{item.width}</div>
                                        <div className="product-cell weight">{item.weight}</div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products
import './product.css';
import Productslist from '../products/Productslist';
import cotton from './img/product/susan-wilkinson-y9QJFGvdLWk-unsplash.jpg';
import polyester from './img/product/moonstarious-project-_pIg9_Swzl8-unsplash.jpg';
import nylon from './img/product/top-view-fabric-texture.jpg';
import functional from './img/product/egor-myznik-Bw5MpZ7AAfo-unsplash.jpg';
import mixed from './img/product/vitalijs-barilo-azMZaQCUyV8-unsplash.jpg';
import { useNavigate } from 'react-router-dom';

const products = Object.entries(Productslist);
console.log(products)

function Product() {
    const navigate = useNavigate();

    return (
        <div className="main-product"
        style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='product-title'>
                <div className="product-title-txt">PRODUCT</div>
                <div className='product-title-line'></div>
            </div>

            <div className="product-list">
                {products.map((product, idx) => {
                    return (
                        <div className="product-item"
                        onClick={()=>{navigate('/product')}}
                        style={{
                            backgroundImage: `url(${product[1].img})`,
                        }}>
                                <div className="product-name">{product[1].name}</div>
                                <div className={`product-shortcut ${idx % 2 === 0 ? 'align-left' : ''}`}>shortcut →</div>
                        </div>
                    )
                })}

                {/* <div className="product-item"
                onClick={()=>{navigate('/product')}}
                style={{
                    backgroundImage: `url(${cotton})`, // backgroundImage를 문자열로 처리
                }}>
                    <div className="product-name">COTTON</div>
                    <div className="product-shortcut">shortcut →</div>
                </div>

                <div className="product-item"
                onClick={()=>{navigate('/product')}}
                style={{
                    backgroundImage: `url(${polyester})`, // backgroundImage를 문자열로 처리
                }}>
                    <div className="product-name">POLYESTER</div>
                    <div className="product-shortcut">shortcut →</div>
                </div>

                <div className="product-item"
                onClick={()=>{navigate('/product')}}
                style={{
                    backgroundImage: `url(${nylon})`, // backgroundImage를 문자열로 처리
                }}>
                    <div className="product-name">NYLON</div>
                    <div className="product-shortcut">shortcut →</div>
                </div>

                <div className="product-item"
                onClick={()=>{navigate('/product')}}
                style={{
                    backgroundImage: `url(${functional})`, // backgroundImage를 문자열로 처리
                }}>
                    <div className="product-name">FUNCTIONAL FABRIC</div>
                    <div className="product-shortcut">shortcut →</div>
                </div>

                <div className="product-item"
                onClick={()=>{navigate('/product')}}
                style={{
                    backgroundImage: `url(${mixed})`, // backgroundImage를 문자열로 처리
                }}>
                    <div className="product-name">MIXED FABRIC</div>
                    <div className="product-shortcut">shortcut →</div>
                </div> */}
            </div>
        </div>
    )
}

export default Product;
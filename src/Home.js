import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" 
                />
                <div className="home_row">
                    <Product
                        id="1234"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/31Ou0J8c1XL.__AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="1234"
                        title="The Lean Startup aaaa aaaaaaaa aaaaaa bbbbbbb ccccccccc dddddddddd"
                        price={299.9}
                        image="https://m.media-amazon.com/images/I/31Ou0J8c1XL.__AC_SY200_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="1234"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/31Ou0J8c1XL.__AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="1234"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/31Ou0J8c1XL.__AC_SY200_.jpg"
                        rating={4}
                    />
                    <Product
                        id="1234"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/31Ou0J8c1XL.__AC_SY200_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home_row">
                <Product
                        id="1234"
                        title="The Lean Startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/31Ou0J8c1XL.__AC_SY200_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

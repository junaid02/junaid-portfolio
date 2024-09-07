import React from 'react';
import Image from 'next/image';
import shape10 from '@/assets/img/shape/10.png'
import shape2 from '@/assets/img/shape/2.webp'
import PriceData from '@/assets/jsonData/price/PriceData.json'
import SinglePrice from './SinglePrice';

const Price = () => {
    return (
        <>
            <div id="pricing" className="pricing-area default-padding-top">
                <div className="container">
                    <div className="pricing-box">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="heading-left">
                                    <div className="left-info">
                                        <h5 className="sub-title">Pricing</h5>
                                        <h2 className="title">The best pricing plans <br /> to get your best</h2>
                                        <div className="heading-shape">
                                            <Image src={shape10} alt="Shape" />
                                        </div>
                                    </div>
                                </div>
                                <div className="save-ammount mt-100 mt-md-50">
                                    <h4>Save up to <strong>50%</strong> with your every order</h4>
                                    <Image src={shape2} alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                {PriceData.map(data =>
                                    <SinglePrice data={data} key={data.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Price;
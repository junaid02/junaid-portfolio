import Link from 'next/link';
import React from 'react';

const SinglePrice = ({ data }) => {
    const { title, btnText, btnClass, price, currency, icon } = data

    return (
        <>
            <div className="pricing-style-one">
                <div className="conntent">
                    <h4>{title}</h4>
                    <ul>
                        {data.list.map(info =>
                            <li key={info.id}>{info}</li>
                        )}
                    </ul>
                    <Link className={`btn mt-25 btn-sm circle ${btnClass}`} href="/contact">{btnText}</Link>
                </div>
                <div className="price">
                    <h2><sup>{currency}</sup>{price}</h2>
                    <i className={icon}></i>
                </div>
            </div>
        </>
    );
};

export default SinglePrice;
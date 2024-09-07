import Image from 'next/image';
import React from 'react';
import FaqData from '@/assets/jsonData/faq/FaqData.json'
import SingleFaq1 from '../faq/SingleFaq1';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ServiceSinglePage = ({ serviceInfo }) => {
    const { thumbFull, title } = serviceInfo

    return (
        <>
            <div className="services-details-area default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-lg-8 services-single-content">
                                <div className="thumb">
                                    <Image src="/assets/img/banner/5.jpg" alt="Thumb" width={775} height={440} />
                                </div>
                                <h2>{title}</h2>
                                <p>
                                    We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology.
                                </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="content">
                                                <h4>Included Services</h4>
                                                <ul className="feature-list-item">
                                                    <li>Monthly SEO Task</li>
                                                    <li>24/7 AllTime Supporting</li>
                                                    <li>Turbo Boosting</li>
                                                    <li>Expert Team Members</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h4>The Challange</h4>
                                                <p>
                                                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4>What we do?</h4>
                                <p>
                                    Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.  pleasures have to be repudiated and annoyances accepted.
                                </p>
                                <div className="faq-style-one mt-40">
                                    <h3 className="mb-25">Common Question for this project</h3>
                                    <div className="accordion" id="faqAccordion">
                                        {FaqData.map(faq =>
                                            <SingleFaq1 faq={faq} key={faq.id} />
                                        )}
                                    </div>
                                </div>
                                <div className="services-more mt-50">
                                    <h3>Popular Services</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-development"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Speed Optimization</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-layers"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Frontend Development</Link></h4>
                                                <p>
                                                    These cases are perfectly simple and easy to distinguish. In a free hour, when our power.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 services-sidebar">
                                <div className="single-widget services-list">
                                    <h4 className="widget-title">Services List</h4>
                                    <div className="content">
                                        <ul>
                                            <li className="current-item"><Link href="#" scroll={false}>App Integration</Link></li>
                                            <li><Link href="#" scroll={false}>Maxed Out Mobile Apps</Link></li>
                                            <li><Link href="#" scroll={false}>Cyril Technologies</Link></li>
                                            <li><Link href="#" scroll={false}>Hopper Technologies</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-widget quick-contact text-light" style={{ backgroundImage: `url(/assets/img/thumb/3.jpg)` }}>
                                    <div className="content">
                                        <i className="fas fa-phone"></i>
                                        <h4>Need any help?</h4>
                                        <p>
                                            We are here to help our customer any time. You can call on 24/7 To Answer Your Question.
                                        </p>
                                        <h2><a href="tel:(012) 6679545">(012) 6679545</a></h2>
                                    </div>
                                </div>
                                <div className="single-widget brochure">
                                    <h4 className="widget-title">Brochure</h4>
                                    <ul>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Download Brochure </Link></li>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Company Details </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceSinglePage;
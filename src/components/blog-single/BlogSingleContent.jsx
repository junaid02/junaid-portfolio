import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSingleContent = () => {
    return (
        <>
            <div className="blog-area blog-style-one-area">
                <div className="blog-single-content">
                    <div className="thumb">
                        <Link href="#" scroll={false}><Image src={`/assets/img/banner/4.jpg`} alt="Thumb" width={1035} height={575} /></Link>
                    </div>
                    <div className="info">
                        <div className="meta">
                            <ul>
                                <li>
                                    <Link href="#" scroll={false}><i className="fas fa-user-circle"></i> Admin</Link>
                                </li>
                                <li>
                                    <Link href="#" scroll={false}><i className="fas fa-comments"></i> 26 Comments</Link>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                        </p>
                        <p>
                            New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                        </p>
                        <blockquote>
                            Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.
                        </blockquote>
                        <p>
                            Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                        </p>
                        <h3>Conduct replied off led whether?</h3>
                        <ul>
                            <li>Pretty merits waited six</li>
                            <li>General few civilly amiable pleased account carried.</li>
                            <li>Continue indulged speaking</li>
                            <li>Narrow formal length my highly</li>
                            <li>Occasional pianoforte alteration unaffected impossible</li>
                        </ul>
                        <p>
                            Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum.
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BlogSingleContent;
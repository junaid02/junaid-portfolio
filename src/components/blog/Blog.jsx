import React from 'react';
import BlogData from '@/assets/jsonData/blog/BlogData.json'
import SingleBlog from './SingleBlog';

const Blog = () => {
    return (
        <>
            <div id="blog" className="blog-style-one-area blog-area default-padding-top bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">News</h4>
                                <h2 className="title">Latest from blog</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogData.map(blog =>
                            <SingleBlog blog={blog} key={blog.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {
    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                        <div className="section-title">
                            <h2>Our Blog</h2>
                            <h3>Our Latest News</h3>
                        </div>
                    </div>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="blog-card">
                                    <div className="image">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="contnet">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li>{blog.author}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link> </h2>
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;
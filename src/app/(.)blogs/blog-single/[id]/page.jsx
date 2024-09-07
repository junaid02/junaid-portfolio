import BlogPostAuthor from '@/components/blog-single/BlogPostAuthor';
import BlogPostComments from '@/components/blog-single/BlogPostComments';
import BlogPostPagination from '@/components/blog-single/BlogPostPagination';
import BlogSingleContent from '@/components/blog-single/BlogSingleContent';
import BlogTagsShare from '@/components/blog-single/BlogTagsShare';
import HeaderStyle1 from '@/components/header/HeaderStyle1';
import Modal from '@/components/modal/Modal';
import React from 'react';

const BlogSingleModal = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle1 />
                <Modal>
                    <BlogSingleContent />
                    <BlogPostAuthor />
                    <BlogTagsShare />
                    <BlogPostPagination />
                    <BlogPostComments />
                </Modal>
            </div>
        </>
    );
};

export default BlogSingleModal;
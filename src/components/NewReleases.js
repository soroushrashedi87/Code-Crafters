import React from 'react';
import imageCardNewReleases from '../assets/images/newReleases-1.avif';
import { FaTags } from 'react-icons/fa';
import data from '../jsonData/all_data.json';

function NewReleases() {
  return (
    <section className="section-newReleases my-5">
        <div className="d-flex justify-content-between">
        <div className="section-newReleases-title">
            <h2 className="f-f">انتشارات جدید</h2>
        </div>
        <a href="#" className="btn btn-secondary f-i">دیدن همه</a>
        </div>
        <div className="row">
          {
            data.blogs.map(blog=> (
              <div className="col-10 col-md-6 col-lg-4 mx-auto" key={blog.author}>
              <div className="section-newReleases-card card my-3 border-none">
                <a href="#" className="text-decoration-none">
                <div className="card-header bg-none border-none">
                  <img className="card-img-top rounded" src={imageCardNewReleases} />
                </div>
                <div className="card-body mt--1">
                  <h3 className="text-primary section-newReleases-card-title f-i">
                    {blog.title}
                  </h3>
                  <span className="text-muted">{blog.published_date}</span>
                  <span className="mx-1 text-muted">
                    <FaTags />
                  </span>
                  <div className="newReleases-tags d-inline">
                  {
                    blog.tags.map(tag=> <p className="bg-secndary px-1 mx-1 rounded d-inline text-dark f-i">{tag}</p>)
                  }
                  </div>
                </div>
                </a>
              </div>
            </div>
            ))
          }
        </div>
        <div className="my-3 d-flex justify-content-center">
          <button className="btn btn-secondary bg-secndary border-none px-5 py-3 display-7 text-dark f-i">لود بیشتر</button>
        </div>
    </section>
  );
}

export default NewReleases;

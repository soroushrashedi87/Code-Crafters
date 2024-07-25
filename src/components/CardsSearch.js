import React, { useEffect, useState } from 'react';
import imageTest from '../assets/images/imageTestCard.avif';
import { FaTags } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import data from '../jsonData/all_data.json';
function CardsSearch() {
  const location= useLocation();
  const searchQuery= new URLSearchParams(location.search).get('q');
  const dataCards= data.blogs.filter(blog=> blog.title.indexOf(searchQuery)!=-1);
  return (
    <div className="col-12 col-lg-8">
        <div className="direction-rtl">
        <p className="text-muted my-3 f-i">{dataCards.length} مورد پیدا شده برای "{searchQuery}"</p>
        {
          dataCards.map(blog=>(
            <div className="card card-search d-flex flex-md-row border-none py-3 border-bottom">
            <img className="img-fluid card-search-img" src={imageTest} />
            <div className="card-body my-3 f-i">
              <a href="#" className="text-decoration-none">
              <h3 className="text-primary card-title">{blog.title}</h3>
              </a>
              <span className="text-muted">{blog.published_date}</span>
              <span className="mx-1 text-muted">
                      <FaTags />
              </span>
              <div className="d-inline">
                {
                  blog.tags.map(tag=><p className="bg-secndary px-1 mx-1 rounded d-inline text-dark f-i">{tag}</p>)
                }
              </div>
              <p className="text-muted my-3">
                {blog.description}
              </p>
            </div>
          </div>
          ))
        }
        </div>
    </div>
  );
}

export default CardsSearch;

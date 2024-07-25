import React from 'react';
import data from '../jsonData/all_data.json';
import image from '../assets/images/img-1.avif';
import { FaTags } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineDislike } from 'react-icons/ai';

function NewArticle() {
  return (
    <div className="newArticle-container">
      <h1 className="display-3 f-i my-2">آموزش واقعی پایتون</h1>
      <div className="newArticle-img">
      <img src={image} className="img-fluid"/>
      </div>
      <div className="newArticle-about mx-2">
        <div className="newArticle-title my-2">
          <a href="#" className="text-decoration-none">
          <h2 className="display-6 text-primary f-i">{data.blogs[0].title}</h2>
          </a>
        </div>
        <div className="newArticle-description my-1">
          <p className="f-i">{data.blogs[0].description}</p>
        </div>
        <div className="d-flex align-items-center">
          <span className="text-muted newArticle-date">{data.blogs[0].published_date}</span>
          <span className="mx-1">
          <FaTags />
          </span>
          <div className="newArticle-tags f-i mx-2">
            {
              data.blogs[0].tags.map(tag => <p className="bg-secndary px-1 mx-1 rounded d-inline">{tag}</p>)
            }
          </div>
          <div className="newArticle-likeAndDislike d-flex">
              <span className="text-danger newArticle-likeIcon">
                <AiOutlineLike />
                <span>{data.blogs[0].like}</span>
              </span>
              <span className="text-danger newArticle-likeIcon">
                <AiOutlineDislike />
                <span>{data.blogs[0].dislike}</span>
              </span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default NewArticle;

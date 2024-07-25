import React from 'react';
import NewArticle from './NewArticle';
import FreeEmailSeries from './FreeEmailSeries';


function NewArticleAndEmailSeries() {
  return (
    <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <NewArticle />
        </div>
        <div className="col-12 col-md-10 col-lg-4 mx-auto">
            <FreeEmailSeries />
        </div>
    </div>
  );
}

export default NewArticleAndEmailSeries;

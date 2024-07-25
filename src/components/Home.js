import React from 'react';
import NewArticleAndEmailSeries from './NewArticleAndEmailSeries';
import Categories from './Categories';
import FormSearch from './FormSearch';
import NewReleases from './NewReleases';



function Home() {
  return (
    <div className="container mt-6">
    <div className="direction-rtl">
    <NewArticleAndEmailSeries />
    <Categories />
    <FormSearch />
    <NewReleases />
    <FormSearch />
    </div>
    </div>
  );
}

export default Home;

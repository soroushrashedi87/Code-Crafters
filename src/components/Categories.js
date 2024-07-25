import React from 'react';
import data from '../jsonData/all_data.json';

function Categories() {
  return (
    <section className="section-categories my-5">
    <div className="section-categories-title">
        <h2 className="f-f">اکتشاف code crafters</h2>
    </div>
    <div className="row my-4">
            {
                data.categories.map(category=>(
                    <div className="col-10 col-sm-6 col-lg-3 mx-auto my-3">
                    <a href="#" className="text-decoration-none" key={category.id}>
                    <div className="section-categories-category py-4 px-4 text-center">
                        <h3 className="f-i font-weight-bold text-warning">{category.title}</h3>
                        <p className="f-i text-white">{category.description}</p>
                    </div>
                    </a>
                    </div>
                ))
            }
    </div>
    </section>
  );
}

export default Categories;

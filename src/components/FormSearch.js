import React from 'react';
import { FaSearch } from 'react-icons/fa';

function FormSearch() {
  return (
    <form action="/search" method="GET" className="form-request-project">
      <div className="d-flex justify-content space-aground">
        <div className="searchbox py-2 w-75">
        <input className="form-control textField-search w-100 f-i" name="q" placeholder="سرچ کردن در اموزش ها و دوره ها و ازمون ها و ..." type="search" />
        <button type="submit" className="searchbox-btn"><FaSearch /></button>
        </div>
        <button type="submit" className="btn btn-danger btn-block f-i px-5 box-shadow-1 d-none d-lg-block">
          سرچ کردن »
        </button>
        </div>
    </form>
  );
}

export default FormSearch;

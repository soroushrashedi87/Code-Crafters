import React from 'react';
import { FaSearch } from 'react-icons/fa';


function SearchControl() {
  return (
    <div className="col-12 col-lg-4">
        <div className="direction-rtl">
        <form action="/search">
        <div className="searchbox py-2">
            <input className="textField-search form-control w-100 f-i direction-rtl" name="q" type="search" placeholder="سرچ کردن..." />
            <button className="searchbox-btn" type="submit"><FaSearch /></button>
        </div>
        </form>
        <div className="d-flex flex-column py-2">
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="font-bold mx-2">مشاهده همه نوع ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">اموزش ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">پست ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">دوره ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">جلسات دوره ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">ازمون ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">پادکست ها</span>
            </label>
            <div className="my-4">
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2 font-bold">همه لول ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">مقدماتی</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">متوسط</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">پیشرفته</span>
            </label>
            </div>
            <div className="my-4">
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2 font-bold">همه وضعیت ها</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">کامل شده</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">در حال کامل شدن</span>
            </label>
            <label className="chechbox-search-control f-i py-2 d-flex align-items-center">
                <input type="checkbox" className="chechbox-control btn-toggle"/>
                <span className="mx-2">شروع نشده</span>
            </label>
            </div>
        </div>
        </div>
    </div>
  );
}

export default SearchControl;

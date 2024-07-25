import React from 'react';


function RequestProjectForm() {
  return (
    <form action="#" method="POST" className="request-project-form py-5 px-5 border rounded direction-rtl">
        <h2 className="display-5 text-dark text-center f-i">درخواست پروژه</h2>
        <div className="my-5 f-i">
          <div className="d-flex flex-column">
          <label className="my-2">
            نام و نام خانوادگی
            <input type="text" className="form-control request-project-form-textField my-1" placeholder="مثلا سروش راشدی"/>
          </label>
          <label className="my-2">
             شماره تلفن
            <input type="text" className="form-control request-project-form-textField direction-ltr my-1" placeholder="09111111111"/>
          </label>
          <label className="my-2">
            عنوان پروژه
            <input type="text" className="form-control request-project-form-textField my-1" placeholder="یک وبلاگ شخصی با React"/>
          </label>
          <label className="my-2">
            دسته
            <select className="form-control request-project-form-textField my-1">
              <option> وبسایت و وب اپلیکیشن و وبلاگ</option>
              <option>اپلیکیشن های موبایلی</option>
              <option>برنامه های دسکتاپ و ویندوز</option>
              <option>کارهای مربوط به بخش وب (رسپانسیو سازی و ....)</option>
              <option></option>
            </select>
          </label>
          <label className="my-2">
             توضیحات پروژه
            <textarea className="form-control request-project-form-textField my-1" placeholder="...."></textarea>
          </label>
          <div className="d-flex justify-content-center my-3">
            <button className="btn btn-outline-secondary request-project-form-btn" type="submit">ارسال</button>
          </div>
          </div>
        </div>
    </form>
  );
}

export default RequestProjectForm;

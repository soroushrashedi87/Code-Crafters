import React from 'react';


function RequestPrinterForm() {
  return (
    <form action="#" method="POST" className="request-project-form my-5 py-5 px-4 px-md-5 direction-rtl">
        <h2 className="display-5 text-dark text-center f-i">درخواست نویسنده شدن</h2>
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
              درباره خودتان بنویسید
            <textarea className="form-control request-project-form-textField request-project-form-textarea my-1" placeholder="مثلا من سروش راشدی هستم یک نویسنده انلاین و..."></textarea>
          </label>
          <div className="d-flex justify-content-center my-3">
            <button className="btn btn-outline-secondary request-project-form-btn" type="submit">ارسال</button>
          </div>
          </div>
        </div>
    </form>
  );
}

export default RequestPrinterForm;

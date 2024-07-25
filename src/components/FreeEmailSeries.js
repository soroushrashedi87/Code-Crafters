import React from 'react';
import image from '../assets/images/pytrick.webp';

function FreeEmailSeries() {
  return (
    <div className="card mt-6 bg-secndary">
    <form className="card-body" action="#" method="post">
      <div className="form-group">
        <p className="h5 text-muted text-center f-i">— سری ایمیل رایگان —</p>
        <p className="h3 text-center f-i">🐍 ترفند های پایتون 💌</p>
        <p><img loading="lazy" className="img-fluid rounded" src={image} width="738" height="490" alt="Python Tricks Dictionary Merge" /></p>
      </div>
      <div className="form-group">
        <input type="hidden" name="csrfmiddlewaretoken" value="4unj7sSTgegfXYxjFQvzjhtsNYOUXhnl1JQ8KvP6x8jx4yhLsMW0MYiZyuhWE1x0"/>
        <input type="hidden" name="slug" value="static-python-tricks-sidebar"/>
        <input type="email" className="form-control form-control-md f-i" name="email" placeholder="ایمیل" required=""/>
      </div>
      <button type="submit" name="submit" className="btn btn-danger btn-md my-2 w-100 btn-block f-i">ترفند هارو دریافت کنید »</button>
      <p className="mb-0 mt-2 text-muted text-center f-i">🔒 بدون لغو اشتراک در هر زمان.</p>
    </form>
  </div>
  );
}

export default FreeEmailSeries;

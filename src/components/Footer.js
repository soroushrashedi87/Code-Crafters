import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-3">
        <hr />
        <div className="py-5">
            {/* <p className="text-secondary f-i">
                2020-2024
            </p> */}
            <p className="w-75 mx-auto text-center text-muted">
            <span className="f-i">
            © 2015–2024 code crafters 
            </span>
            .
            <a href="#" className="text-muted mx-2 f-i">
              یوتیوب
            </a>
            .
            <a href="#" className="text-muted mx-2 f-i">
              اینستاگرام
            </a>
            .
            <a href="#" className="text-muted mx-2 f-i">
              تلگرام
            </a>
            .
            <a href="#" className="text-muted mx-2 f-i">
              فیس بوک
            </a>
            .
            <a href="#" className="text-muted mx-2 f-i">
              یادگیری پایتون
            </a>
            .
            <a href="#" className="text-muted mx-2 f-i">
               سرچ کردن
            </a>
            .
            <a href="#" className="text-muted mx-2 f-i">
               ارتباط با ما
            </a>
            </p>
            <p className="text-center text-muted f-i">پایتون مبارک</p>
        </div>
    </footer>
  );
}

export default Footer;

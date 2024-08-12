import React, { useContext } from 'react';
import imagePerson from '../assets/images/personTeam.avif';
import FreeEmailSeries from './FreeEmailSeries';
import { DiGithub } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
function PersonTeamDetalis() {
  return (
    <div className="container mt-6">
        <div className="direction-rtl">
        <div className="row">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <div className="d-flex flex-column align-items-center my-3">
                <img src={imagePerson} className="img-fluid img-person-team rounded-circle" />
                <h1 className="text-center f-i font-bold my-3">درباره سروش راشدی</h1>
                <div className="d-flex justify-content-aground direction-ltr">
                  <a href="#" className="text-decoration-none person-team-link d-flex align-items-center mx-2"><span className="person-team-link-icon"><DiGithub /></span> GitHub</a>
                  <a href="#" className="text-decoration-none person-team-link d-flex align-items-center mx-2"><span className="person-team-link-icon"><FaLinkedin /></span> Linkedin</a>
                  <a href="#" className="text-decoration-none person-team-link d-flex align-items-center mx-2"><span className="person-team-link-icon"><CgWebsite /></span> WebSite</a>
                </div>
                </div>
                <div className="my-5 f-i">
                  <p className="my-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <p className="my-4">چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                  <p className="my-4">کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  <div className="my-4 f-i">
                    <h2>آموزش های سروش :</h2>
                    <ul className="my-2">
                      <li className="my-2"><a href="#" className="text-decoration-none">لورم ایپسوم</a></li>
                      <li className="my-2"><a href="#" className="text-decoration-none">لورم ایپسوم</a></li>
                      <li className="my-2"><a href="#" className="text-decoration-none">لورم ایپسوم</a></li>
                      <li className="my-2"><a href="#" className="text-decoration-none">لورم ایپسوم</a></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="col-12 col-md-10 col-lg-4 mx-auto">
                <FreeEmailSeries />
            </div>
        </div>
        </div>
    </div>
  );
}

export default PersonTeamDetalis;

import React from 'react';
import FreeEmailSeries from './FreeEmailSeries';
import imageTeam from '../assets/images/imageTeam.avif';
import imagePageTeam from '../assets/images/imagePageTeam.avif';
import imagePersonTeamTest from '../assets/images/testimonial.jpg';
import data from '../jsonData/all_data.json';
function TeamPage() {
  return (
    <>
    <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
        <div>
      <h1 className="display-3 f-i my-2">تیم کد کرفترس</h1>
      <div>
      <img src={imagePageTeam} className="img-fluid"/>
      </div>
      <div className="mx-2">
        <div className="newArticle-description my-1">
          <p className="f-i">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است:</p>
          <ul className="my-4 f-i">
            <li className="my-3">بیش از 2,400 اموزش & ویدیو و درس در سایت</li>
            <li className="my-3">+3 ملیون بازدید در ماه گذشته</li>
            <li className="my-3">بدست اوردن 295,000 مشترک در newsletter</li>
            <li className="my-3">بدست اوردن 100,000 لایک در Facebook</li>
            <li className="my-3">بدست اوردن 120,000 دنبال کننده در X</li>
            <li className="my-3">بدست اوردن 130,000 مشترک در یوتیوب</li>
            <li className="my-3">بیش از 50,000 دانلود پادکست در ماه گذشته</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
        <div className="col-12 col-md-10 col-lg-4 mx-auto">
            <FreeEmailSeries />
        </div>
    </div>
    <div className="mb-5 mt-6">
      <div className="row">
        <div className="col-10 col-md-7 mx-auto mx-md-0">
        <img src={imageTeam} className="img-fluid" />
        </div>
      </div>
    </div>
    <section className="section-persons-team my-3">
      <div className="secton-persons-team-title">
        <h2 className="f-i font-bold mx-5 mx-md-0">ارتباط با تیم codecrafters.ir</h2>
      </div>
      <div className="my-4">
        <div className="row">
          {
            data.teams.map(person=>(
              <div className="col-10 col-lg-7 mx-auto mx-md-0">
              <div className="card my-3 f-i">
                <div className="card-header">
                  <h3 className="text-center text-md-start">{person.name}</h3>
                </div>
                <div className="card-body py-4 px-3 d-flex flex-column flex-md-row align-items-md-center align-items-center">
                  <img className="rounded-circle" src={imagePersonTeamTest} />
                  <div className="mx-3 my-3 my-md-0 text-center text-md-start">
                  <p>
                    {person.description}
                  </p>
                  <a href="#" className="text-decoration-none">درباره {person.name.split(" ")[0]}</a>
                  </div>
                </div>
              </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
    </>
  );
}

export default TeamPage;

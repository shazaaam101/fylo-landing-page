import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import imgIntro from "./images/illustration-intro.png";
import iconAccess from "./images/icon-access-anywhere.svg";
import iconSecurity from "./images/icon-security.svg";
import iconAnyFile from "./images/icon-any-file.svg";
import iconCollab from "./images/icon-collaboration.svg";
import imgStayProductive from "./images/illustration-stay-productive.png";
import imgProfile1 from "./images/profile-1.jpg";
import imgProfile2 from "./images/profile-2.jpg";
import imgProfile3 from "./images/profile-3.jpg";
import { useState } from "react";
function App() {
  const [isError, setIsError] = useState(false);
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const inputEmail = e.target.email.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const _error = !emailRegex.test(inputEmail);
    setIsError(_error);
    if (!_error) {
      e.target.reset();
    }
  };
  return (
    <div className="App">
      <Navbar />
      <div className="intro-bg">
        <div className="wrapper">
          <section className="intro">
            <img src={imgIntro} alt="intro" />
            <h1 className="title-intro">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p>
              Fylo stores all your most important files in one secure
              location.Access them wherever you need, share and collaborate with
              friends family, and co-workers.
            </p>
            <button>Get Started</button>
          </section>
        </div>
      </div>
      <div className="main-bg">
        <div className="wrapper">
          <section className="features">
            <div className="grid">
              <div className="feature">
                <img src={iconAccess} alt="access-file" />
                <h1>Access your files,anywhere</h1>
                <p>
                  The ability to use a smartphone, tablet, or computer to access
                  your account means your files follow you everywhere.
                </p>
              </div>
              <div className="feature">
                <img src={iconSecurity} alt="security" />
                <h1>Security you can trust</h1>
                <p>
                  2-factor authentication and user-controlled encryption are
                  just a couple of the security features we allow to help secure
                  your files.
                </p>
              </div>
              <div className="feature">
                <img src={iconCollab} alt="collaboration" />
                <h1>Real-time collaboration</h1>
                <p>
                  Securely share files and folders with friends, family and
                  collagues for live collaboration. No email attachments
                  required.
                </p>
              </div>
              <div className="feature">
                <img src={iconAnyFile} alt="anyfile" />
                <h1>Store any type of file</h1>
                <p>
                  Whether you're sharing holidays photos or work documents, Fylo
                  has you covered allowing for all file types to be securely
                  stored and shared.
                </p>
              </div>
            </div>
          </section>
          <section className="two-panels">
            <div className="img">
              <img src={imgStayProductive} alt="stay-productive" />
            </div>

            <div className="content">
              <h1>Stay productive, wherever you are</h1>
              <p>
                Never let location be an issue when accssing your files.Fylo has
                you covered for all of your files storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration.No email attachments required.
              </p>
              <div className="link">
                <a href="#">See how Fylo works</a>
              </div>
            </div>
          </section>
          <section className="split-three-comments">
            <div className="comment">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude.Since making the switch our team has becomee a
                well-oiled collaboration machine.
              </p>
              <div className="profile">
                <img src={imgProfile1} alt="" />
                <div className="name-role">
                  <p className="name">
                    <b>Satish Patel</b>
                  </p>
                  <p className="role">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude.Since making the switch our team has becomee a
                well-oiled collaboration machine.
              </p>
              <div className="profile">
                <img src={imgProfile2} alt="" />
                <div className="name-role">
                  <p className="name">
                    <b>Bruce McKenzle</b>
                  </p>
                  <p className="role">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>
                Fylo has improved our team productivity by an order of
                magnitude.Since making the switch our team has becomee a
                well-oiled collaboration machine.
              </p>
              <div className="profile">
                <img src={imgProfile3} alt="" />
                <div className="name-role">
                  <p className="name">
                    <b>Iva Boyd</b>
                  </p>
                  <p className="role">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </section>
          <div className="email-box">
            <h1>Get early access today</h1>
            <p>
              It only takes a minute to sign up and our free starter tier is
              extremly generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <form
              className="input-field"
              onSubmit={(e) => handleSubmitEmail(e)}
              noValidate
            >
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
              />
              {isError && (
                <p className="error">Please enter a valid email address</p>
              )}
              <button type="submit">Get Started For Free</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import "./Profile.css";
import { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  return (
    <>
      <div id="container">
        <h2 id="name-tag">Faisal Baig</h2>
        <p id="short-desc">I am a Frontend Developer</p>
        <div id="social-div">
          <span>Social Links</span>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61567939942217"
                target="blank"
                className="fa fa-facebook"
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mirzaf317/"
                target="blank"
                className="fa fa-instagram"
              ></a>
            </li>
            <li>
              <a
                href="https://x.com/mirzaf317"
                target="blank"
                className="fa fa-twitter"
              ></a>
            </li>
            <li>
              <a href="https://github.com/Faisalbaig1998" target="blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/faisal-baig-595313120/"
                target="blank"
                className="fa fa-linkedin"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;

import "./Styles2.css";
import Header from "./Header";

function About() {
  return (
    <div>
        <Header/>
        <br /><br /><br />
    <div className="about-container">
      <div className="about-header">
        <h2>About FormInova</h2>
        <p>Learn, Evolve, Succeed – your journey starts here.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Who We Are</h3>
          <p>
            FormInova is an online learning platform dedicated to providing high-quality courses in Web Development, Data Science, Design, Marketing, and more. Our mission is to empower learners worldwide with practical skills that make a real impact.
          </p>

          <h3>Our Mission</h3>
          <p>
            We aim to make education accessible, engaging, and practical. With our expert instructors and modern curriculum, you can learn at your own pace and achieve your professional goals.
          </p>

          <h3>Why Choose Us</h3>
          <ul>
            <li><i class="fa-solid fa-star"></i> Expert instructors with real-world experience</li>
            <li><i class="fa-solid fa-calendar-check"></i> Flexible learning at your own pace</li>
            <li><i class="fa-solid fa-briefcase"></i> Practical skills for your career</li>
            <li><i class="fa-solid fa-certificate"></i> Certificate of completion for each course</li>
          </ul>
        </div>

      </div>
    </div>
    </div>
  );
}

export default About;

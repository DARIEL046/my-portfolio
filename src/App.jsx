import './style.css'

function App() {
  return (
    <section>
      <nav class="navigation">
        <div class="text">My Portfolio</div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="hero" id="home">
        <div class="hero-text">
          <h1>MARK DARIEL M. BASCUGUIN</h1>
          <small>
            My name is Mark Dariel M. Bascuguin, 20 years old, and I live in
            Barangay Taludtod, Balayan, Batangas. I am currently a student at
            Batangas State University, where I continue to develop my knowledge
            and skills to achieve my goals and build a better future.
          </small>
        </div>

        <div class="hero-image">
          <img src="dariel.jpeg" alt="Mark Dariel" />
        </div>
      </div>

      <section class="about" id="about">
        <h2 class="about-me">About Me</h2>

        <div class="about-content">
          <div class="about-images">
            <img src="img.avif" alt="About photo 1" />
            <img src="img1.jpeg" alt="About photo 2" />
          </div>

          <div class="about-text">
            <p>
              I'm an Information Technology student at Batangas State University
              with a strong interest in web development, databases, and system
              design. I enjoy building things that work clean interfaces,
              efficient backends, and code that solves real problems.
            </p>
            <p>
              My current toolkit includes HTML, CSS, JavaScript, React, and SQL.
              I'm constantly learning new technologies and refining my skills
              because in IT, standing still means falling behind.
            </p>
            <p>
              Beyond the code, I value clear communication, teamwork, and the
              discipline to see a project through from idea to deployment. I'm
              looking for opportunities where I can contribute, learn, and grow
              as a developer.
            </p>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <h2>Contact Me</h2>
        <ul class="contact-list">
          <li><strong>Email:</strong> <a href="gmail">24-10822@g.batstate-u.edu.ph</a></li>
          <li><strong>Phone:</strong> <a href="number">+63 912 345 6789</a></li>
          <li><strong>Location:</strong> Barangay Taludtod, Balayan, Batangas</li>
          <li><strong>Facebook:</strong> <a href="https://facebook.com/" target="_blank" rel="noreferrer">facebook.com/MARK DARIEL BASCUGUIN</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/" target="_blank" rel="noreferrer">github.com/DARIEL046</a></li>
        </ul>
      </section>
    </section>
  );
}

export default App;
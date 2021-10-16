import "./styles.css";

import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <h3>
          Discover who we are, what we do, and why we do it.{" "}
          <i class="fas fa-arrow-right"></i>
        </h3>
      </div>
      <div className="BigPipe">
        <h3> The work we do impacts the world, and the future.</h3>
        <h4 id="smalltext">
          We work on things we’re incredibly passionate about, that align with
          our values and purpose, and that have a positive impact on the world.
          It's who we are. It's why we build.
        </h4>
      </div>
      <div className="footer">
        <h4> Copyright &copy; 2021 TeamLitho | Tech Center</h4>
      </div>
    </div>
  );
}

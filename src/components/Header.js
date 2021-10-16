import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <div className="header">
      <h3>TeamLitho | Careers</h3>
      <Button variant="outline-secondary">Tech Center</Button>
      <br />
      <hr />
      <p>
        When we build for the world, we bring our talents, experiences, and
        passions with us. Through our unique stories, we help bring the world
        closer together.
      </p>
    </div>
  );
}

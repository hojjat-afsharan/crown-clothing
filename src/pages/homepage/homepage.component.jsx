import "./homepage.styles.scss";
import Directory from "../../components/directory/directory.component";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  console.log(props);
  return (
    <div className="homepage">
      <button onClick={() =>props.history.push("/hats")}> hats with props</button>
      <Link to="/hats">HATS with link</Link>
      <Directory />
    </div>
  );
};

export default HomePage;

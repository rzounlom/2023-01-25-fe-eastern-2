import "./Main.css";

import Content from "../content/Content";
import Sidbar from "../sidebar/Sidbar";

const Main = () => {
  return (
    <div className="main">
      <Sidbar />
      <Content />
    </div>
  );
};

export default Main;

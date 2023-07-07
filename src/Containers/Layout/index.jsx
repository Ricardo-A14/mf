import Header from "../../Components/Header";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;

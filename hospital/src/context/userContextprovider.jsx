import React from "react";
import UserContext from "./context.js";

export default userContextprovider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [uname, setUname] = useState("");

  return (
    <UserContext.Provider
      value={{ isloggedin, setIsloggedin, uname, setUname }}
    >
      {children}
    </UserContext.Provider>
  );
};

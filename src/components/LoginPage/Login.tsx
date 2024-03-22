// libs
import { useCallback, useContext, useState } from "react";

// components
import { Box } from "@sprinklrjs/spaceweb/box";
import { Button } from "@sprinklrjs/spaceweb/button";
import { FormControl } from "@sprinklrjs/spaceweb/form-control";
import { Input } from "@sprinklrjs/spaceweb/input";

// context
import { userContext } from "../../App";

// utils
import { checkUserNameAndPassword, createNewUser } from "./utils";

export const Login = () => {
  const [isExistingUser,setIsExistingUser] = useState(false); // move this state to login page
  const [signUp,setSignUp]=useState(false);
  const [username, setUserName] = useState("");
  const { setUser } = useContext(userContext);
  const [password, setPassword] = useState("");

  const handleOnClick = useCallback(() => {
    const user = checkUserNameAndPassword(username, password);
    setUser(user);
    setUserName("");
    setPassword("");
  }, [username, password]);

  const handleOnSignUp = useCallback(() => {
    createNewUser(username, password);
    setUserName("");
    setPassword("");
    setSignUp(!signUp);
  }, [username, password]);

  const handleClickToSignUp=useCallback(()=>{
    setSignUp(!signUp);
    setIsExistingUser(!isExistingUser);
  },[signUp,isExistingUser]);
  
  return (
    <Box
      className={[
        "h-full w-full pt-auto flex justify-center items-center ",
        { backgroundColor: "#F5F5F5" },
      ]}
    >
      <Box
        className={[
          "p-3 rounded-md w-1/4 flex flex-col justify-between spr-shadow-03",
          { minHeight: "30%" },
        ]}
      >
        <FormControl className="p-3" label="Username">
          <Input
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl className="p-3" label="Password">
          <Input
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <br />
        {!isExistingUser ? (
          <Box className="p-3 flex gap-2 justify-center items-center">
            <Button onClick={handleOnClick}>Click to Sign In</Button>
            <Button onClick={handleClickToSignUp}>Click to Sign Up</Button>
          </Box>
        ) : signUp ? (
          <Button className="p-3 self-center" onClick={handleOnSignUp}>
            Sign Up
          </Button>
        ) : (
          <Button className="p-3 self-center" onClick={handleOnClick}>
            Sign In
          </Button>
        )}
      </Box>
    </Box>
  );
};

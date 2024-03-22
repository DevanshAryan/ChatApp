// libs
import * as React from 'react';
import { Dispatch , useState , useCallback } from 'react';
import SpacewebProvider from '@sprinklrjs/spaceweb/spacewebProvider';
import light from '@sprinklrjs/spaceweb-themes/hyperspace/light';
import '@sprinklrjs/spaceweb-themes/styles/globals.min.css';


// component
import { ChatContainer } from './components/chatContainer';
import { Login } from './components/LoginPage';


// types
import { User } from './types';

// css
import './App.css';

// utils
import {addDataInLocalStorage} from './utils';

type UserContextType = {
  user: User | undefined;
  setUser: Dispatch<React.SetStateAction<User | undefined>>;
}

export const userContext = React.createContext<UserContextType>({
  user: undefined,
  setUser: ()=>{},
});



const App = (): React.ReactElement => {
  
  const [user, setUser] = useState<User | undefined>(undefined);
  
  React.useEffect(()=>{
    addDataInLocalStorage();
  },[]);

  return(
  <SpacewebProvider direction="ltr" theme={light} >
    <userContext.Provider value={{user,setUser}}>
      {!!user?<ChatContainer/>:<Login/>}
    </userContext.Provider>
  </SpacewebProvider>
)}

export default App;

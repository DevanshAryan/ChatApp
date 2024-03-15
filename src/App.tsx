import * as React from 'react';
import SpacewebProvider from '@sprinklrjs/spaceweb/spacewebProvider';
import light from '@sprinklrjs/spaceweb-themes/hyperspace/light';
import '@sprinklrjs/spaceweb-themes/styles/globals.min.css';

import { ChatContainer } from './components/chatContainer';

import './App.css';


const App = (): React.ReactElement => (
  
  <SpacewebProvider direction="ltr" theme={light} >
    <ChatContainer/>
  </SpacewebProvider>

  
);

export default App;


// react element
/*

{/* <App>
  <Header user={user} />
  <Body chatIds={chatIds}> ->selected Id state
      <Sidebar > 
        <AllChatSection />
      <Sidebar/>
      <ChatArea  chatId={chatID}/> input box state -> message state, 
  </Body>
</App> 


// HEADER COMPLETE STYLING

// Sidebar



// AllMessages={
//   id:mesage
// }

// chatId

*/
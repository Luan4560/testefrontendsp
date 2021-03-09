import React from 'react';
import {StatusBar} from 'react-native'
import Main from './src/screens/Main'



const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FF8686" />
      <Main />
    </>
  );
};


export default App;

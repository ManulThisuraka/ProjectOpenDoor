import React from 'react';

import {View} from 'react-native';

import ChatHeader from './screens/chatScreen/ChatHeader';
import ChatScreen from './screens/chatScreen/ChatScreen';
import loginScreen from './screens/loginScreen.js/loginScreen';

const App = () => {
  return (
    <View>
      <ChatHeader />
      <ChatScreen />
    </View>
  );
};

export default App;

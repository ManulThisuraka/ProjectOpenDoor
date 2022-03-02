import React from 'react';

import {View, StyleSheet} from 'react-native';

import ChatHeader from './screens/chatScreen/ChatHeader';
import ChatScreen from './screens/chatScreen/ChatScreen';
import loginScreen from './screens/loginScreen.js/loginScreen';
import ChatComponement from './screens/chatScreen/ChatComponement';
import ButtonContainer from './screens/chatScreen/ButtonContainer';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <ChatHeader />
      <ChatScreen />
      <View style={{top: 122}}>
        <ButtonContainer />
      </View>
      <View style={styles.background}>
        <ChatComponement />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    top: 170,
  },
});

export default App;

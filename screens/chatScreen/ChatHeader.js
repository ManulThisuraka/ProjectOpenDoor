import React from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ChatHeader() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#00314D" />
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <FontAwesome5
          name="plus"
          size={40}
          color="#ffffff"
          style={{position: 'absolute', top: 65, right: 32}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 122,
    backgroundColor: '#00314D',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Arimo',
    position: 'absolute',
    left: 16,
    top: 51,
    color: '#A1B9CF',
    fontWeight: 'bold',
  },
});

export default ChatHeader;

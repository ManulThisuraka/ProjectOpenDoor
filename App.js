import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#006590" />
      <View style={styles.container}>
        <LinearGradient
          colors={['#006590', '#00314D']}
          style={styles.linearGradient}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.logo}
              source={require('./assets/images/logo.png')}
            />
            <View style={styles.subItemContainer}>
              <Text style={styles.text}>Redeem code</Text>
              <Text style={styles.textSub}>
                Please enter or scan your contact’s card unique code
              </Text>
              <View style={{flex: 1}}>
                <View style={styles.button}>
                  <View style={styles.box1}></View>
                  <View style={styles.box2}>
                    <Text style={styles.box2Text}>CODE HERE</Text>
                  </View>
                  <View style={styles.box3}></View>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  logo: {
    marginTop: '9.48%',
    position: 'absolute',
    marginLeft: '15.47%',
  },
  itemContainer: {
    flex: 1,
  },
  subItemContainer: {
    flex: 1,

    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    position: 'absolute',
    width: 154,
    height: 28,
    left: 19,
    top: 375,
    fontWeight: 'bold',
    fontFamily: 'Arimo',
  },
  textSub: {
    fontSize: 15,
    fontFamily: 'Roboto',
    position: 'absolute',
    width: 323,
    height: 17,
    top: 414,
    left: 20,
    color: '#BDBDBD',
  },
  button: {
    flex: 3,
    backgroundColor: '#000000',
    flexDirection: 'row',
    borderRadius: 12,
    position: 'absolute',
    left: 20,
    top: 443,
    opacity: 0.3,
  },
  textInsideBox: {
    flex: 1,
    color: '#A1B9CF',
    position: 'absolute',
    justifyContent: 'center',
    fontSize: 28,
    width: 172,
    height: 33,
    top: 12,
    left: 117,
  },
  box1: {
    backgroundColor: '#000000',
    width: 56,
    height: 56,
    opacity: 0.32,
  },
  box2: {
    width: 248,
    height: 56,
  },
  box3: {
    width: 39,
    height: 56,
  },
  box2Text: {
    flex: 1,
    color: '#A1B9CF',
    fontFamily: 'Roboto',
    fontSize: 25,
    top: 12,
    left: 56,
  },
});

export default App;

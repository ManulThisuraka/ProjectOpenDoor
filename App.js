import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import LinearGradient from 'react-native-linear-gradient';

const icon = <FontAwesome5 name={'comments'} />;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#006590" />
      <View style={styles.container}>
        {/* 00314D */}
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
                Please enter or scan your contact`s card unique code
              </Text>
              <View style={{flex: 1}}>
                <View style={styles.button}>
                  <View style={styles.box1}>
                    <FontAwesome5
                      name="qrcode"
                      size={40}
                      color="#fff"
                      style={{marginLeft: 10, marginTop: 8}}
                    />
                  </View>
                  <TextInput
                    style={styles.box2}
                    placeholder="CODE HERE"
                    fontSize={28}
                    placeholderTextColor="#A1B9CF"
                    paddingLeft={40}
                  />
                  <View style={styles.box3}>
                    <FontAwesome5
                      name="arrow-right"
                      size={25}
                      color="#fff"
                      style={{marginRight: 10, marginTop: 14}}
                    />
                  </View>
                </View>
                <View style={styles.lineContainer}>
                  <View style={styles.lineBreak} />
                  <Text style={styles.lineText}>or</Text>
                  <View style={styles.lineBreak2} />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.register}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                      left: 35,
                      top: 8,
                    }}>
                    Register
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.login}>
                  <Text
                    style={{
                      fontSize: 20,
                      right: -40,
                      color: 'white',
                      top: 8,
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
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
    borderTopStartRadius: 12,
    borderBottomStartRadius: 12,
  },
  box2: {
    width: 248,
    height: 56,
  },
  box3: {
    width: 39,
    height: 56,
  },
  lineContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  lineBreak: {
    width: 133,
    left: 33,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    position: 'absolute',
    top: 670,
  },
  lineBreak2: {
    width: 133,
    right: 33,
    fontSize: 16,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    position: 'absolute',
    top: 670,
  },
  lineText: {
    width: 82,
    left: 175,
    color: '#fff',
    position: 'absolute',
    top: 660,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  register: {
    flexDirection: 'row',
    backgroundColor: '#EC7942',
    width: 135,
    height: 45,
    position: 'absolute',
    top: 435,
    left: 33,
    borderRadius: 12,
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Arimo',
  },
  login: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    width: 135,
    height: 45,
    position: 'absolute',
    top: 435,
    right: 33,
    borderRadius: 12,
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Arimo',
  },
});

export default App;

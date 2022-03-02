import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Guillermo Wilson',
    description: 'Ok',
    time: '04:15 PM',
    date: 'Today',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Isabella',
    description:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
    time: '03:45 PM',
    date: 'Today',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Daisy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    time: '12:45 PM',
    date: 'Yesterday',
  },
];

const Item = ({title, description, time, date}) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      source={require('../../assets/images/Profile.png')}
    />
    <Text style={styles.title}>{title}</Text>
    <Text numberOfLines={2} style={styles.description}>
      {description}
    </Text>
    <View
      style={{
        flex: 2,
        flexDirection: 'column',
        position: 'absolute',
        right: '10%',
        top: 6,
      }}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  </View>
);

const ChatComponement = () => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      description={item.description}
      time={item.time}
      date={item.date}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#001623',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    left: 20,
    fontSize: 16,
    color: '#BEBEBE',
    fontFamily: 'Arimo',
  },
  image: {
    width: 56,
    height: 56,
  },
  description: {
    flex: 1,
    flexWrap: 'wrap',
    left: 26,
    fontSize: 12,
    color: '#6D6D6D',
    position: 'relative',
    left: -20,
    paddingTop: 34,
  },
  time: {
    left: 20,
    fontSize: 12,
    color: '#BEBEBE',
    fontFamily: 'Arimo',
  },
  date: {left: 20, fontSize: 14, color: '#BEBEBE', fontFamily: 'Arimo'},
});

export default ChatComponement;

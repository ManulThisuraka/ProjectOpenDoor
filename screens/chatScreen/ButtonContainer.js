import React from 'react';

import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChatHeader from './ChatHeader';

function ButtonContainer(props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.archived}>
        <Text style={styles.boxText}>Archived</Text>
      </TouchableOpacity>
      <View style={styles.searchIcon}>
        <TouchableOpacity style={styles.search}>
          <FontAwesome5
            name="search"
            size={14}
            color="#A1B9CF"
            style={{left: 9.3, top: 4}}
          />
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchIcon}>
        <TouchableOpacity style={styles.filter}>
          <FontAwesome5
            name="plus"
            size={10}
            color="#A1B9CF"
            style={{left: 9.3, top: 8}}
          />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    top: 122,
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: '#001420',
    height: 42,
    width: '100%',
    position: 'absolute',
  },
  archived: {
    backgroundColor: '#A1B9CF',
    width: 100,
    height: 26,
    borderRadius: 10,
    position: 'absolute',
    left: 16,
    margin: 8,
    opacity: 0.5,
  },
  searchIcon: {
    flex: 2,
    flexDirection: 'row',
  },
  search: {
    backgroundColor: '#A1B9CF',
    width: 100,
    height: 26,
    borderRadius: 10,
    position: 'absolute',
    left: 138,
    margin: 8,
    opacity: 0.5,
  },
  filter: {
    backgroundColor: '#19446C',
    width: 102,
    height: 26,
    borderRadius: 10,
    position: 'absolute',
    left: 65,
    margin: 8,
  },

  boxText: {
    fontSize: 15,
    color: '#A1B9CF',
    fontFamily: 'Arimo',
    paddingTop: 3.5,
    alignSelf: 'center',
    opacity: 1,
  },
  chatContainer: {
    backgroundColor: '#7C7C7C',
    width: '100%',
    height: '90%',
    top: '20%',
  },
  searchText: {
    fontSize: 15,
    color: '#A1B9CF',
    fontFamily: 'Arimo',
    paddingTop: 3.5,
    alignSelf: 'center',
    position: 'absolute',
    paddingLeft: 20,
  },
  filterText: {
    fontSize: 15,
    color: '#A1B9CF',
    fontFamily: 'Arimo',
    paddingTop: 3.5,
    alignSelf: 'center',
    position: 'absolute',
    paddingLeft: 5,
  },
});

export default ButtonContainer;

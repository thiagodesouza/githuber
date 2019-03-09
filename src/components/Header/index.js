import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  AsyncStorage, Text, TouchableOpacity, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={this.signOut}>
          <Icon style={styles.icon} name="exchange" size={16} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);

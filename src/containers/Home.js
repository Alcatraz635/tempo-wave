import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    resizeMode: 'stretch',
  },
  logo: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  welcome: {
    flex:3,
    alignItems:'flex-start',
    margin: 10,
  },
  welcomeText: {
    fontFamily: 'HoeflerText-Black',
    fontSize: 20,
  }
});

export default class Home extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  toCounter = () => {
    const { navigate } = this.props;
    navigate({
      type: 'push',
      key: 'counter'
    });
  }


  render() {
    return (
      <Image  source={require('../images/tempo-wave-bg.png')} style={styles.container}>
        <Image source={require('../images/logo-placeholder.png')} style={styles.logo}/>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>
            Welcome to Tempo Wave!
          </Text>
          <Button>Help</Button>
        </View>
      </Image>
    );
  }
}

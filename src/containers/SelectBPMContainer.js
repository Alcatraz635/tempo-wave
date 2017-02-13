import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TouchableHighlight, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/SelectBPMActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    resizeMode: 'stretch'
  },
  back: {
    margin: 10,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});


class CounterContainer extends Component {
  static propTypes = {
    navigate: PropTypes.func.isRequired
  };

  handleBack = () => {
    const { navigate } = this.props;
    navigate({ type: 'pop' });
  }

  render() {
    console.log(this.props);
    return (

      <Image source={require('../images/tempo-wave-bg.png')} style={styles.container}>
        <View>
          <Text style={styles.text}>Clicked: {this.props.selectedBPM} times</Text>
          <TouchableHighlight onPress={this.props.selectBPM}>
            <Text style={styles.text}>+</Text>
          </TouchableHighlight>
        </View>
        <TouchableOpacity onPress={this.handleBack}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </Image>
    );
  }
}



const mapStateToProps = ( state, ownProps ) => {
  return {
    selectedBPM: state.selectedBPM,
  }
}
const mapDispatchToProps = ( dispatch ) => {
  return {
    selectBPM: ( ) => dispatch(CounterActions.selectBPM( )),
  }
}


export default connect( mapStateToProps, mapDispatchToProps )( CounterContainer )

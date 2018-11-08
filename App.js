import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import { Audio, Video } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: new Audio.Sound(),
    }
  }

  async componentDidMount() {
    await this.state.sound.loadAsync(require('./assets/muscle-car.mp3'));
  }

  _handleBarCodeRead = async() => {
    try {
      await this.state.sound.setPositionAsync(0);
      await this.state.sound.playAsync();
    } catch(error) {}
  }

  render() {
    const { width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <View>
          <Text>Video</Text>
          <Button
            title='sound'
            onPress={ () => this._handleBarCodeRead() }
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

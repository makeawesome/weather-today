import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather'

const API_KEY = "a633fc9f47319be56f5987a7bfa20207";

export default class App extends Component {
  // 1.날씨 데이터 수신, 2.데이터 수신 여부를 알아야 한다.
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error,
        });
      }
    );
  }

  _getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: this._cvtKelvinToCel(json.main.temp),
        name: json.weather[0].main,
        isLoaded: true,
      });
    });
  }

  _cvtKelvinToCel = (kelvin) => {
    return Math.floor((Number(kelvin) - 273.15) * 10) / 10;
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    console.log(name);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        {isLoaded ? (
          <Weather temp={temperature} weatherName={name}/>
          ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather info</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24,
  }
});

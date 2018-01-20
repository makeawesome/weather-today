import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component{
//     render(){
//         return (
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//                 <StatusBar hidden={true}/>
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={100} name="ios-rainy"></Ionicons>
//                     <Text style={styles.temp}>Temp here</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>It's Raining now</Text>
//                     <Text style={styles.subtitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Rainy day",
        subtitle: "Take a umbrella",
        icon: "weather-pouring",
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny day",
        subtitle: "Attach sunscreen",
        icon: "weather-sunny",
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Take care of yourself",
        icon: "weather-lightning",
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Cloudy day",
        subtitle: "Goodday to take a cup of coffee with a book",
        icon: "weather-cloudy",
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Snowy day",
        subtitle: "Do you wanna build a snowman?",
        icon: "weather-snowy",
    },
    Drizzle:{
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle day",
        subtitle: "Bring your umbrella",
        icon: "weather-rainy",
    },
    Fog:{
        colors: ["#DFD5CC", "#744619"],
        title: "Foggy day",
        subtitle: "Watch your step!",
        icon: "weather-fog",
    },
    Haze:{
        colors: ["#744619", "#744619"],
        title: "Haze day",
        subtitle: "Where does wind come from?",
        icon: "weather-fog",
    },
    Mist:{
        colors: ["#ACDBD7", "#ACDBD7"],
        title: "Misty day",
        subtitle: "Good day to watch a movie",
        icon: "weather-sunset",
    },
}

function Weather({ temp, weatherName }){
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={100} name={weatherCases[weatherName].icon}>
                </MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300",
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 100,
    }
})
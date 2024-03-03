import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import axios from "axios";
//
import Validar from "../../resources/validar.png"
import Incidente from "../../resources/incidente.png"
import Photo from "../../resources/pfp.png"
import Registro from "../../resources/Registro.png"

const Home = ({ navigation }) => {

    const handleValidate = (e) => {
        navigation.navigate('Validate');
    };
    const handleIncident = (e) => {
        navigation.navigate('Report')
    }
    const handleHome = (e) => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Hola  </Text>
                <Text style={styles.welcomeTextBold}>NombreBrigadista!</Text>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image source={Registro} style={styles.logo}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleHome}>
                        <Image source={Photo} style={styles.logo}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleValidate}>
                    <Image source={Validar} style={styles.imagen} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleIncident}>
                    <Image source={Incidente} style={styles.imagen} />
                </TouchableOpacity>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height:"100%"
    },
    welcomeContainer: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#6d2829",
        paddingTop: 40,
        paddingVertical: 10,
        width: "100%",
        height:"15%",
    },
    welcomeText: {
        color: "white",
        fontSize: 20,
        fontWeight: "normal",
        marginLeft: 20
    },
    welcomeTextBold: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    imageContainer: {
        flexDirection: 'row',
        marginLeft:30
    },
    buttonsContainer: {
        flexDirection: 'colum',
        alignItems: 'center',
        backgroundColor: "#002c6f",
        width: "100%",
        height:"85%"
    },
    imagen: {
        width: 250,
        height: 250,
        marginTop: 50
    },
    logo: {
        width: 50,
        height: 50,
        marginRight:8
    }
});

export default Home;
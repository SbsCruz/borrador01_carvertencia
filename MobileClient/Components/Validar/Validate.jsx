import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import axios from "axios";
//
import Atras from "../../resources/atras.png"
//para instalar la camara

const Validate = ({ navigation }) => {

    const handleHome = (e) => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleHome} >
                <Image source={Atras} style={styles.atras}></Image>
            </TouchableOpacity>


        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    atras: {
        width: 65,
        height: 65
    }
});

export default Validate;
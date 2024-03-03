import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { CameraView,Camera,CameraType } from 'expo-camera/next';

import Atras from "../../resources/atras.png";
//npx expo install expo-barcode-scanner
//npx expo install expo-camera

const Validate = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [type, setType] = useState("back");
    const camera = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

    const handleHome = () => {
        navigation.goBack();
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} type={type} ref={camera} 
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
             barCodeScannerSettings={{
                barCodeTypes: ["qr"],
            }}>
                <TouchableOpacity onPress={handleHome}>
                    <Image source={Atras} style={styles.atras} />
                </TouchableOpacity>
            </CameraView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    atras: {
        marginTop:25,
        width: 65,
        height: 65,
    },
    camera: {
        flex: 1,
        width: "100%",
    },
});

export default Validate;

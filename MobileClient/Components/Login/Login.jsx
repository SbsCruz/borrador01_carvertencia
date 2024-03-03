import React from "react";
import { Button, StyleSheet, Text, View, TextInput, Image } from "react-native";
import axios from "axios";
import Logo from "../../resources/carLogo.png"

const UserLogin = ({ navigation }) => {
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(null);

    const handleLogin = (e) => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BRIGADISTA</Text>
            <Text style={styles.label}>Ingresa tu usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="UserName"
                onChangeText={(text) => setUser(text)}
                value={user}
            />
            <Text style={styles.label}>Ingresa tu contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
            />
            {error && <Text style={styles.error}>{error}</Text>}
            <Button style={styles.button} title="INGRESA" onPress={handleLogin} />
            <Text style={styles.forgot}>¿Haz olvidado tu contraseña?</Text>
            <Text style={styles.link}>Revisa los términos y condiciones aquí.</Text>
            <Image source={Logo} style={styles.logo}></Image>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#002c6f",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 33,
        fontWeight: "bold",
        marginBottom: 20,
        color: "white",
        borderBottomWidth: 2,
        borderBottomColor: "white",
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: 'white'
    },
    input: {
        borderColor: "#6d2829",
        borderWidth: 3,
        width: "80%",
        marginBottom: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 50,
    },
    forgot: {
        fontSize: 14,
        marginBottom: 5,
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white",
    },
    link: {
        fontSize: 14,
        color: "white",
        borderBottomWidth: 1,
        borderBottomColor: "white",
    },
    button: {
        padding: 10,
        marginTop: 20,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor:"6d2829",
    },
    logo: {
        width: 200,
        height: 200,
    }
});

export default UserLogin;
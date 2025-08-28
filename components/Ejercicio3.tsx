import { useState } from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function Ejercicio3() {
    return (
        <View style={styles.container}>
            <Text><h1>Hola</h1></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: "black"
    },
});
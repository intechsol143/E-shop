import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../Globalstyle'
import Button from '../Components/Button'
const Firstscreen = ({ navigation }) => {
    return (
        <ImageBackground source={require("../Assets/bgImg.png")} style={{ flex: 1 }}>
            <View style={{ flex: 3 }} />
            <View style={styles.btnc}>
                <Button title={"Join"} onPress={() => navigation.navigate("Selectionscreen")} />
            </View>

        </ImageBackground>
    )
}

export default Firstscreen

const styles = StyleSheet.create({
    btnc:{ flex: 2, alignItems: 'center', justifyContent: "center" }
})
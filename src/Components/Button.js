import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../Globalstyle'
const Button = ({ title,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.ttxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        height: 50,
        borderRadius: 20,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Styles.SecondaryColor
    },
    ttxt: {
        fontSize: 18,

        color: 'white',
        fontFamily: Styles.Medium
    }
})
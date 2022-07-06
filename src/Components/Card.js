import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../Globalstyle'
const Card = ({title,subtitle,subtitle1,rad1,rad2,st2}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cat1Parent}>
                <View style={styles.cat1}>
                <Text style={styles.subTxt}>{st2}</Text>
                    {rad1()}
                    <Text style={styles.subTxt}>{subtitle}</Text>
                </View>
                <View style={styles.cat1}>
                    {rad2()}
                    <Text style={styles.subTxt}>{subtitle1}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        height: 50,
        borderRadius: 10,
        width: '70%',
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    cat1: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    subTxt:{
fontSize:14,
fontFamily:Styles.Regular
    },
    cat1Parent: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        alignItems: 'center', justifyContent: 'space-between'
    },
})
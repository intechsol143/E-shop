import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../Globalstyle'
import StarIcon from 'react-native-vector-icons/AntDesign'
const OnlineUsers = ({ item }) => {
    return (
        <View style={{ marginVertical: 10 }}>
            <View style={styles.cardParent}>
                <View style={styles.resTT}>
                    <Text style={styles.head}>{item.title}</Text>
                    <Text style={styles.txt}>{item.cat}</Text>
                </View>
                <View style={styles.resTT}>
                    <Text style={styles.txt}>${item.price}</Text>
                    <View style={styles.iconView}>
                        <Text style={[styles.txt, { textAlign: 'center',marginRight:6 }]}>{item.star}.0</Text>
                        <StarIcon name={"star"} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default OnlineUsers

const styles = StyleSheet.create({
    cardParent: {
        height: 60,
        alignItems: 'center', justifyContent: "space-between",
        flexDirection: 'row',
        borderRadius: 6,
        paddingHorizontal: 12,
        backgroundColor: '#fff', width: '80%', alignSelf: 'center'

    },
    iconView:{flexDirection:'row',alignItems:'center',justifyContent:'center'},
    resTT: {
        // alignItems: 'center',
        //  justifyContent: 'space-between' 
    },
    txt: {
        fontSize: 12,
        color:'grey',
        fontFamily: Styles.Regular
    },
    head: {
        fontSize: 14,
        color:'#000',
        fontFamily: Styles.Medium
    }
})
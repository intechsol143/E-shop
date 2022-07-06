import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Globalstyle'
import Button from '../Components/Button'
import Icon from 'react-native-vector-icons/Feather'
import OnlineUsers from '../Components/OnlineUsers'


const Homescreen = ({ navigation }) => {

  const data = [
    {
      id:1,
      title:'Eccomerce Website',
      price:'200',
      name:'Aslam',
      cat:"Web",
      star:"4"


    },
    {
      id:2,
      title:'Graphics',
      price:'200',
      name:'Anthany',
      star:"4",
      cat:"Graphics",


    },
    {
      id:3,
      title:'Mobile Apss',
      price:'200',
      name:'Paul',
      star:"4",
      cat:"Apps",


    },
    {
      id:4,
      title:'SEO Optimization',
      price:'200',
      name:'Anthony',
      star:"4",
      cat:"SEO",


    },
]

  return (
    <View style={styles.container}>
      <View style={styles.iconsview}>
        <Icon name={"menu"} size={32} color={"white"} />
        <Image source={require("../Assets/lance.png")} style={{ height: 30, width: 100, resizeMode: 'contain' }} />
        <View>
          <Text></Text>
        </View>
      </View>
      <View style={styles.cardStyle}>
        <FlatList 
        data={data}
        renderItem={({item})=>{
          return(
            <OnlineUsers item={item}/>
          )
        }}
        />
        <View style={{height:20}}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Button title={"Back"} onPress={()=>navigation.goBack()}/>

        </View>
      
      </View>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  iconsview: {
    flexDirection: 'row', alignItems: 'center',
    padding: 12,
    marginTop: '10%',
    justifyContent: 'space-between'
  },
  cardStyle: {
    marginTop: '20%',
  },
  spacer: {
    height: 20
  },
  dropdown2BtnTxtStyle: {
    color: 'lightgrey',
    // backgroundColor:'red',
    fontSize: 14,
    textAlign: 'left',

    fontFamily: Styles.Regular,
  },
  container: { flex: 1, backgroundColor: Styles.backgroundcolor }
})
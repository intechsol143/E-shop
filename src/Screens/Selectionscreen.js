import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Globalstyle'
import Button from '../Components/Button'
import Icon from 'react-native-vector-icons/Feather'
import Card from '../Components/Card'
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Selectionscreen = ({ navigation }) => {
    const [checked, setChecked] = useState('first');
    const categories = ["Apps Development", "Web Development", "Graphic Designing", "Seo Optimization"]
    const nech = ["Apps", "Web", "Graphics", "SEO"]
    const km = ["KM", "M", "MM", "YARD"]
    const dis = ["1", "2", "3", "4"]
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
                <Card
                    subtitle={"Local JOb"}
                    subtitle1={"Remote Job"}
                    rad1={() => (<RadioButton
                        value={checked}
                        color={'black'}
                        status={checked != 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />)}
                    rad2={() => (<RadioButton
                        value="first"
                        color={'black'}
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />)}
                />
                <View style={styles.spacer} />
                <Card
                    rad1={() => (<SelectDropdown
                        data={categories}
                        defaultButtonText={
                            'Category'
                        }
                        buttonTextStyle={
                            styles.dropdown2BtnTxtStyle
                        }
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonStyle={{
                            width: 119,


                            alignSelf: 'center',
                            // elevation: 2,
                            shadowColor: '#000000',
                            shadowOffset: {
                                width: 0,
                                height: .5
                            },
                            shadowRadius: 1,
                            shadowOpacity: 0.5,
                            backgroundColor: '#fff',
                            // borderRadius: 6,
                        }}
                        renderDropdownIcon={isOpened => {
                            return (
                                <FontAwesome
                                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                                    color={Styles.backgroundcolor}
                                    size={18}
                                />
                            );
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {

                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />)}
                    rad2={() => (<SelectDropdown
                        data={nech}
                        defaultButtonText={
                            'Niche'
                        }
                        buttonTextStyle={
                            styles.dropdown2BtnTxtStyle
                        }
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonStyle={{
                            width: 119,

                            alignSelf: 'center',
                            elevation: 2,
                            shadowColor: '#000000',
                            shadowOffset: {
                                width: 0,
                                height: .5
                            },
                            shadowRadius: 1,
                            shadowOpacity: 0.5,
                            backgroundColor: '#fff',
                            borderRadius: 6,
                        }}
                        renderDropdownIcon={isOpened => {
                            return (
                                <FontAwesome
                                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                                    color={Styles.backgroundcolor}
                                    size={18}
                                />
                            );
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {

                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />)}
                />
                <View style={styles.spacer} />
                <Card
                    st2={"Location"}
                    rad2={() => (<SelectDropdown
                        data={km}
                        defaultButtonText={
                            'KM'
                        }
                        buttonTextStyle={
                            styles.dropdown2BtnTxtStyle
                        }
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonStyle={{
                            width: 90,
                            left: 12,
                            alignSelf: 'center',
                            elevation: 2,
                            shadowColor: '#000000',
                            shadowOffset: {
                                width: 0,
                                height: .5
                            },
                            shadowRadius: 1,
                            shadowOpacity: 0.5,
                            backgroundColor: '#fff',
                            borderRadius: 6,
                            borderColor: "white",
                        }}
                        renderDropdownIcon={isOpened => {
                            return (
                                <FontAwesome
                                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                                    color={Styles.backgroundcolor}
                                    size={18}
                                />
                            );
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {

                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />)}
                    rad1={() => (<SelectDropdown
                        data={dis}
                        defaultButtonText={
                            '1'
                        }
                        buttonTextStyle={
                            styles.dropdown2BtnTxtStyle
                        }
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonStyle={{
                            width: 70,
                            left: 10,
                            alignSelf: 'center',
                            elevation: 2,
                            shadowColor: '#000000',
                            shadowOffset: {
                                width: 0,
                                height: .5
                            },
                            borderColor: "white",
                            shadowRadius: 1,
                            shadowOpacity: 0.5,
                            backgroundColor: '#fff',
                            // borderRadius: 6,
                        }}
                        renderDropdownIcon={isOpened => {
                            return (
                                <FontAwesome
                                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                                    color={Styles.backgroundcolor}
                                    size={18}
                                />
                            );
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {

                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />)}
                />
                <View style={styles.spacer} />
                <Card
                    subtitle={"Range $-$$"}
                    subtitle1={""}
                    rad1={() => null}
                    rad2={() => null}
                />
                <View style={styles.spacer} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Button title={"Search"} onPress={()=>navigation.navigate("Homescreen")}/>
                </View>

            </View>
        </View>
    )
}

export default Selectionscreen

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
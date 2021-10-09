import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements/dist/Icon'

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.component}>
            <Icon name="home" color="white" type="entypo" />
            <Icon name="user" color="white" type="entypo" />
            <TouchableOpacity onPress={() => navigation.navigate("LandingPage")} >
            <   Icon name="settings" color="white" type="ionicons" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default NavOptions

const styles = StyleSheet.create({
    component: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        padding: 10,
        height: 50,
        marginBottom: 80
    }
})

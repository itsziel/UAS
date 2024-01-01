import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { getData } from './utils/localStorage'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(async() => {
            const userData = await getData("user");
            if (userData) {
                this.props.router.replace('/welcome');
            } else {
                this.props.router.push('/login');
            }
        }, 3000)
    }

    render() {
        return (
            <View style={styles.pages}>
                <IconLogo />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

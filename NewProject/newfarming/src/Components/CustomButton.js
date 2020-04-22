import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children, onPress } = this.props
        const { container, text } = styles
        return (
            <TouchableOpacity style={container} onPress={onPress}>
                <Text style={text}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: '#0d008a',
        margin: 10,
        paddingHorizontal: 25
    },
    text: {
        color: 'white',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 15
    }
})

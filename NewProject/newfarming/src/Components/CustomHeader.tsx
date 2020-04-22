import * as React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
export default function header(props:any) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => props.menuButtonPress()}>
                <Image style={styles.Image} source={require('../Assets/close.png')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Connected Farming</Text>
            <TouchableOpacity style={styles.notification} onPress={() => {
                props.notificationButtonPress()
            }} >
                <Image style={styles.Image} source={require('../Assets/notification.png')} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    header: {

        width: '100%',
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        marginLeft: 55
    },
    Image: {
        height: 40,
        width: 40,
        alignSelf: 'flex-end',

    },
    notification: {
        alignSelf: 'flex-end',
        marginLeft: 55
    }

})
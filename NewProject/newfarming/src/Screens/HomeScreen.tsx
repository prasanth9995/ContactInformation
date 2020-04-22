import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native'
import CustomCard from '../Components/CustomCard'
import Header from '../Components/CustomHeader';
export default class HomeScreen extends Component{
    constructor(props:any) {
        super(props);
        props.navigation.setOptions({
            headerStyle: {
                backgroundColor: '#00004d',
              },
            headerTitle: () => (
                <Header  
                notificationButtonPress={() => props.navigation.navigate('notification')}
                    menuButtonPress={() => { props.navigation.openDrawer() }} />
            ),
        });

    }
    render() {
        return (
          
     <CustomCard styles={styles.cardContainer}>
      <View style={styles.container}>
        <Text style={styles.textStyle}> 
          Home Screen
        </Text>
      </View>
    </CustomCard>

         )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      top:40
    },
    cardContainer: {
    
      height: 300,
      margin: 50
    },
    textStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  });
  
  
import React, { Component } from 'react';
import {Image,Text,StyleSheet,Alert,View} from 'react-native';
import Button from '../Components/CustomButton'
import Header from '../Components/CustomHeader'
interface Props{
    navigation:any
}
type myState={data:any}
export default class FertilizerScreen extends Component<Props,myState>{
    constructor(props:Props){
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
})
        this.state={
            data:[ {
                "id": 0,
                "ProductName": "Super Fert",
                "prize":5000,
                "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_AxX_vSL8UE6oYj4wHc_8CpGk9R6JsRoO9h0-DzkLHE9XW9je&usqp=CAU",
                "State":"solid",
                "NetWeight":50,
                "description":"Contains Amonium and sulphur componds. Mainly this fertilizer is used for Wheat cultivation"
            }],
        }
    }
    render(){
        return(
            <View>
                <View style={styles.modalView}> 
             <Image source={{uri:this.state.data[0].image}} style={{width:250,height:250}}/>            
                <Text style={styles.popuptext}>{this.state.data[0].ProductName} </Text>
                <Text>By Trust Basket</Text>               
                <Text style={styles.popupPrice}>M.R.P: {(this.state.data[0].prize)} Rs</Text>
                <Text style={styles.popupPrice}>Net Weight: {(this.state.data[0].NetWeight)} kg</Text>
                <Text style={styles.popupPrice}>State:{(this.state.data[0].State)}</Text>
                <Text>{'\n'}</Text>
                <Text style={styles.popupInfo}>{(this.state.data[0].description)}</Text>
                <View >
                <Button children='Add To Cart' onPress={()=>{Alert.alert('item added to cart')}}/>
               </View>
             </View>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    popuptext:{
        fontSize:35,
        fontWeight:'bold'
    },
    modalView: {
        alignItems: 'center',
        marginTop: 40,
        marginLeft:20,
        width:350,
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 650,
      },
    popupPrice:{
      fontSize:20
    },
    popupInfo:{
        paddingLeft:20,
        paddingRight:20,
     justifyContent:'center',
      fontSize:17 
    },
})
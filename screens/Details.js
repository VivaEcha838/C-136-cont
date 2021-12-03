import React, {Component} from "react"
import {View, Text, StyleSheet} from 'react-native'

export default class DetailsScreen extends Component{
    constructor(props){
        super(props)
        this.state ={
            details: {},
            imgPath: "", 
            url: `http://localhost:5000/planet?name=${this.props.navigation.getParam( "planet_name" )}`

        }
    }
    componentDidMount(){
        this.getDetails()
    }
    getDetails=()=>{
        const{url} = this.state;
        axios.get(url).then(
            response=>{
                this.setDetails(response.data.data)
                
            }
        )
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    setDetails=(planetDetails)=>{
        const planetType = 
    }
    render(){
        return(
            <View>
                <Text>DetailsScreen</Text>
            </View>
        )
    }
}
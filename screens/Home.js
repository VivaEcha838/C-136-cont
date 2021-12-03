import React, {Component} from "react"
import {View, Text, StyleSheet, FlatList, Alert, SafeAreaView} from 'react-native'
import {ListItem} from 'react-native-elements'
import axios from "axios"


export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state ={
            listData: [],
            url: "http://localhost:5000/"
        }
    }
    componentDidMount(){
        this.getPlanets()
        console.log(this.state.listData)
    }
    getPlanets=()=>{
        const{url} = this.state;
        axios.get(url).then(
            response=>{
                return this.setState({
                    listData: response.data.data
                })
            }
        )
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    renderItem=({item, index})=>{
        <ListItem
            key = {index}
            title = {`Planet : ${item.name}`}
            subtitle = {`Distance from Earth : ${item.distance_from_earth}`}
            bottomDivider

            onPress = {
                ()=>{
                    this.props.navigation.navigate("Details", {
                        planet_name: item.name
                    })
                }
            }
        />
    }
    keyExtractor=(item, index)=>{
        index.toString()
    }
    render(){
        if(this.state.listData.length === 0){
            return(
                <View>
                    <Text>Loading the data</Text>
                </View>
            )
        }
        return(
            <View>
                <SafeAreaView/>
                <View>
                    <Text>Planets World</Text>
                </View>
                <View>
                    <FlatList
                    data = {this.state.listData}
                    keyExtractor = {this.keyExtractor}
                    renderItem = {this.renderItem}

                    />
                </View>
            </View>
        )
    }
}
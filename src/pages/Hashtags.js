import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView ,FlatList, ActivityIndicator,Dimensions,Image,TouchableWithoutFeedback,Linking,Share } from 'react-native';

const{width,height} = Dimensions.get('window');
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import { TextInput } from 'react-native-gesture-handler';

export default class Hashtags extends React.Component{
    state ={
        trend  :[],
        loading : true
    }
    fetchnews = () => {
        fetch('https://api.twitter.com/1.1/trends/place.json')
        .then((res)=>res.json())
        .then((response)=>{
            this.setState({
                trend  : response.trends,
                loading : false
            })            
        })
    }
    componentDidMount(){
      this.fetchnews()
    }
    sharearticle = async article =>{
        try{
          await Share.share({
              message : 'paylaşmak istermisiniz' + article
          })
        } catch( error ){
            console.log(error)

        }


    }
    render(){
        if(this.state.loading){
            return(
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#333'}}>
                   <ActivityIndicator size="large" color="#fff" />

               </View>
            );
        }
        else{
            return(
                <View style={Styles.container}>
                    <View style={Styles.header}>
                    
                    </View>
                    <View style={Styles.trend}>
                        <FlatList
                        data={this.state.trend}
                        renderItem={({item})=>{
                          return(
                             <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.url)} >
                               <View style={{width:width-50,height:200,backgroundColor:'#fff',marginBottom:15,borderRadius:15}}>
                                   <View style={Styles.gradient}>
                                    
                                     <Text style={{position:'absolute',bottom:0,color:'#fff',fontSize:20,padding:5 }}>{item.name} </Text>
                                     <Text style={{fontSize:16,color:'#fff',position:'absolute',top:0,right:0,padding:5,fontWeight:'bold'}} onPress= {()=>this.sharearticle(item.url)}>Share</Text>
                                   </View>
                               </View>
                             </TouchableWithoutFeedback>
                          );
                        }}

                        />
                    </View>
                </View>

            );

        }
       
    }
}

const Styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor: '#333',
    },
    header :{
        padding:10,
        
    },
    news:{
        alignSelf:'center'
    },
    gradient : {
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,5)'
    },
    stretch: {
       width: 50,
       height: 200,
       resizeMode: 'stretch',
     },
   
   });
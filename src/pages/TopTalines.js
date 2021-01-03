import React from 'react'
import { View, Text , StyleSheet ,SafeAreaView,ScrollView,TouchableOpacity,Image} from 'react-native'
import { create } from 'react-test-renderer'
import TopHeadlines from './TopHeadlines';
import MainTabScreen from './MainTabScreen';

export default function TopTalines({navigation}) {
    return (
            <View style={styles.container}>
            <ScrollView style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.inner}> 
                    <TouchableOpacity onPress={() => {navigation.navigate('Topheadlines')}}>
                        <Text>Top Headlines</Text>   
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 1</Text>   
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 2</Text>   
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 3</Text>   
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 4</Text>   
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 1</Text>   
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 1</Text>   
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 1</Text>   
                </View>
            </View>
                </ScrollView>
           </View>
    )
}


const styles = StyleSheet.create({
 container:{
    width:'100%',
    height:'85%',
    padding:10,
    flexDirection:'row',
    flexWrap:'wrap',
 },
 
 box1:{
    width:'100%',
    height:'50%',
    padding:10
 },
 box:{
    width:'50%',
    height:'50%',
    padding:10
 },
 inner:{
    flex:1,
    backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center',
 },



});
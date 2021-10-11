import { transform, transformFile } from '@babel/core';
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity ,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Item from '../../components/Item'
class Home extends Component {

    renderItem=({item})=>{
       return(
        <Item item={item}/>
       )
    }
    render() {
        const data=[
            {
                id:1,
                icon:"tasks",
                name:"GÖREVLER"
            },
            {
                id:2,
                icon:"shopping-cart",
                name:"MAĞAZA"
            },
            {
                id:3,
                icon:"users",
                name:"ARKADAŞLAR"
            },
            {
                id:4,
                icon:"gift",
                name:"SIRALAMA"
            }
        ]
        return (
            <View style={style.container}>
                <View style={style.top_container}>
                    <View style={{ flexDirection: "row", marginRight: 5 }}>
                        <View style={{ width: 60, height: 60, backgroundColor: "#151828", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                            <Image source={{ uri: 'https://cdn1.ntv.com.tr/gorsel/JtGzyrgUV0CZ-y9harl7Pg.jpg?width=1000&mode=both&scale=both&v=1630064959362' }}
                                style={{ width: 40, height: 40, borderRadius: 10 }} />
                        </View>
                        <View style={{ marginTop: 8, marginLeft: 5 }}>
                            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>Buse Demir</Text>
                            <Text style={{ color: "#383c8a", fontSize: 10, fontWeight: "bold" }}>12 LEVEL</Text>
                            <View style={{ width: 20, height: 5, backgroundColor: "#1a1f2c", marginTop: 5 }}>
                                <View style={{ width: 20, height: 5, backgroundColor: "#3a3a8c" }}></View>
                            </View>
                        </View>
                    </View>
                    <View style={style.top_right}>
                        <View style={style.diamond}>
                            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginRight: 5 }}>5446</Text>
                            <Icon name="gem" size={20} color="#fbef00" />
                        </View>
                        <TouchableOpacity style={style.top_buttons}>
                            <Icon name="bell" size={20} color="#6d7179" />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.top_buttons}>
                            <Icon name="question" size={20} color="#6d7179" />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.top_buttons}>
                            <Icon name="cog" size={20} color="#6d7179" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.image}>
                    <Image source={{ uri: "https://www.elmacim.com/wp-content/uploads/2020/12/iphone-12-pro-graphite-hero.png" }}
                        style={{ width: 250, height: 300 }} />
                    <TouchableOpacity style={{width:350,height:50,backgroundColor:"#6d6aff",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>HAFTANIN ÖDÜLÜ-IPHONE 11</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row",marginTop:30}}>
                        <TouchableOpacity style={style.random_race}>
                            <Text style={style.options_text}>RATGELE YARIŞ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.random_race}>
                            <Text style={style.options_text}>YARIŞMA SEÇ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                style={{paddingHorizontal:5}}
                />
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#0a0e16"
    },
    top_container: {
        flexDirection: "row",
        marginVertical: 20,
        marginHorizontal: 5,
        width: "25%"
    },
    top_right: {
        flexDirection: "row",
        marginLeft: 10,
        width: "75%"
    },
    diamond: {
        width: 90,
        height: 60,
        backgroundColor: "#0c0c15",
        borderWidth: 2,
        borderColor: "#141727",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: 15,
        marginRight: 5
    },
    top_buttons: {
        width: 50,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#151828",
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 5
    },
    image:{
        justifyContent:"center",
        alignItems:'center',
    },
    random_race:{
        width:150,
        height:70,
        marginRight:10,
        borderWidth:3,
        borderColor:"#766efd",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    options_text:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    }
})
export default Home
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

function TopScore({ item }) {
    return (
        <View style={{ marginBottom: 10, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
            <View style={item.id < 4 ? style.top_number : style.low_number}>
                <Text style={[{ fontSize: 15,fontWeight:"bold"},item.id===1?{color:"yellow"}:null||item.id===2?{color:"#c2630d"}:null||item.id===3?{color:"#3b3b3b"}:{color:"#6d6afa"}]}>{item.id}.</Text>
            </View>
            <View style={item.id < 4 ? style.top_info : style.low_info}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[item.id < 4 ? style.high_size : style.low_size], { backgroundColor: "#151828", borderRadius: 10 }}>
                        <Image source={{ uri: 'https://cdn1.ntv.com.tr/gorsel/JtGzyrgUV0CZ-y9harl7Pg.jpg?width=1000&mode=both&scale=both&v=1630064959362' }}
                            style={item.id < 4 ? style.high_size : style.low_size} />
                    </View>
                    <View style={{ marginLeft: 5 }}>
                        <Text style={{ color: "white", fontSize: 12 }}>{item.name}</Text>
                        <Text style={{ color: "#3e3d8c", fontSize: 12 }}>12 LEVEL</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row",marginLeft:20 }}>
                        <Text style={{ color: "#3e3d8c",fontSize:10 }}>TOPLAM PUAN:{item.score}</Text>
                        <Image source={{ uri: 'https://cdn.countryflags.com/thumbs/turkey/flag-wave-250.png' }}
                            style={{width:40,height:20,borderRadius:10,marginLeft:10}} />
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    top_number: {
        width: 40,
        height: 70,
        backgroundColor: "#0b0e18",
        borderWidth: 2,
        borderColor: "#716aff",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 3
    },
    low_number: {
        width: 40,
        height: 40,
        backgroundColor: "#0b0e18",
        borderWidth: 2,
        borderColor: "#716aff",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 3
    },
    top_info: {
        width: 300,
        height: 70,
        backgroundColor: "#0b0e18",
        borderWidth: 2,
        borderColor: "#716aff",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    low_info: {
        width: 300,
        height: 40,
        backgroundColor: "#0b0e18",
        borderWidth: 2,
        borderColor: "#716aff",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    high_size: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    low_size: {
        width: 20,
        height: 20, borderRadius: 10
    }
})
export default TopScore
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

class Game extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.top_container}>
                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <View style={[style.top_content, style.shadowProp]}>
                        </View>
                        <View style={{ marginVertical: 20, marginLeft: 5 }}>
                            <Text style={{ color: "#fdfdfd", fontWeight: 'bold' }}>Buse Demir</Text>
                            <Text style={{ color: "#6a6df9", fontSize: 15, fontWeight: "bold" }}>450</Text>
                        </View>
                    </View>
                    <View style={{ width: 60, height: 60, borderRadius: 50, borderWidth: 4, borderColor: "#faec2f", marginVertical: 10, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 30, color: "#faec2f", fontWeight: "bold" }}>10</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginRight: 10 }}>
                        <View style={{ marginVertical: 20, marginRight: 5, alignItems: "flex-end" }}>
                            <Text style={{ color: "#fdfdfd", fontWeight: 'bold' }}>Buse Demir</Text>
                            <Text style={{ color: "#6a6df9", fontSize: 15, fontWeight: "bold" }}>450</Text>
                        </View>
                        <View style={[style.top_content]}></View>
                    </View>
                </View>

                <View style={style.main_container}>
                    <View style={{ width: 350, height: 250, backgroundColor: "red", borderRadius: 50 }}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/20121216_PSG-ASSE_07_-_Lindsey_Horan.jpg/1200px-20121216_PSG-ASSE_07_-_Lindsey_Horan.jpg' }}
                            style={{ width: "100%", height: "100%", borderRadius: 50 }} />
                    </View>
                    <View style={{ backgroundColor: "#0a0d14", borderWidth: 2, borderColor: "#6970fc", width: 200, height: 70, borderTopLeftRadius: 40, borderTopRightRadius: 40, borderBottomLeftRadius: 70, borderBottomRightRadius: 70, justifyContent: "center", alignItems: "center", position: "relative", top: -18 }}>
                        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#6670fd" }}>9.SORU</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <TouchableOpacity style={[style.options, { flexDirection: "row" }]}>
                            <Text style={style.options_text}>x</Text>
                            <Text style={[style.options_text, { fontSize: 25 }]}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.options}>
                            <Text style={style.options_text}>PASS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.options}>
                            <Text style={style.options_text}>1/2</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={style.question_option}>
                            <Text style={style.question_text}>Goalkeeper</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.question_option}>
                            <Text style={style.question_text}>Goalkeeper</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[style.question_option,{backgroundColor:"#a4ff40"}]}>
                            <Text style={style.question_text}>Goalkeeper</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.question_option}>
                            <Text style={style.question_text}>Goalkeeper</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        )
    }
}
const style = StyleSheet.create({
    container: { height: "100%", backgroundColor: "#0c0f18" },
    top_container: { height: 100, flexDirection: "row", justifyContent: "space-between" },
    top_content: { height: 40, width: 40, backgroundColor: "blue", borderRadius: 50, marginVertical: 20, borderWidth: 4, borderColor: "#fdfdfd" },
    shadowProp: {
        shadowColor: '#fdfdfd',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    main_container: {
        justifyContent: 'center',
        alignItems: "center"
    },
    options: {
        width: 70,
        height: 70,
        backgroundColor: "#6a6ffe",
        borderRadius: 10,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    options_text: {
        color: "#fdfefb",
        fontSize: 20,
        fontWeight: "bold"
    },
    question_option:{
        width:300,
        height:50,
        backgroundColor:"#0a0d14",
        borderWidth:2,
        borderColor:"#6a6ffd",
        borderRadius:10,
        marginTop:8,
        justifyContent:"center",
        alignItems:"center"
    },
    question_text:{
        fontSize:18,
        fontWeight:'bold',
        color:"#fefefe"
    }

})
export default Game

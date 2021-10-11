import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

class Login extends Component {
    render() {
        return (
            <View style={style.container}>
                <View>
                    <Text style={style.header}>GİRİŞ YAP</Text>
                </View>
                <Text style={{ color: "#6a6ffa", marginHorizontal: 30, textAlign: "center", marginTop: 20 }}>Giriş yaparak sıralamada yerinizi alın ve bir çok ödülün sahibi olun</Text>
                <View style={style.social_media}>
                    <TouchableOpacity style={[style.social_media_icon, { backgroundColor: "#1e6fd8" }]}>
                        <Icon name="facebook-f" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.social_media_icon, { backgroundColor: "#0fcaf3" }]}>
                        <Icon name="twitter" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.social_media_icon, { backgroundColor: "#f21924" }]}>
                        <Icon name="google-plus-g" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput placeholder="kullanıcı adı" placeholderTextColor="#6b6ffb" style={style.input}></TextInput>
                    <TextInput placeholder="şifre" placeholderTextColor="#6b6ffb" style={[style.input, { paddingHorizontal: 110 }]}></TextInput>
                    <TextInput placeholder="şifre tekrarı" placeholderTextColor="#6b6ffb" style={style.input}></TextInput>
                </View>
                <TouchableOpacity style={style.submit}>
                     <Text style={{color:"white",fontSize:18,fontWeight:"bold"}}>GİRİŞ YAP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: { height: '100%', backgroundColor: "#0b0b13", justifyContent: "center", alignItems: "center" },
    header: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#6a6ffe"
    },
    social_media: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    social_media_icon: {
        justifyContent: 'center',
        alignItems: "center",
        width: 80,
        height: 60,
        marginRight: 10,
        borderRadius: 30,
        marginVertical: 30
    },
    input: {
        width: 270,
        height: 60,
        backgroundColor: "#0d0d17",
        borderWidth: 3,
        borderColor: "#585dd1",
        marginBottom: 10,
        borderRadius: 30,
        paddingHorizontal: 90
    },
    submit: {
        width: 270,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6a6ffe",
        borderRadius:30,
        marginTop:35
    }
})
export default Login

import React from 'react'
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Item({item}) {
    const icon_name=item.icon
    return (
        <TouchableOpacity style={style.flat_items}>
            <Icon name={item.icon} size={30} color="#c1b801"/>
            <Text style={style.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}
const style=StyleSheet.create({
    flat_items:{
      width:120,
      height:120,
      backgroundColor:"#090c16",
      borderWidth:2,
      borderColor:"#05060b",
      marginRight:10,
      marginTop:20,
      justifyContent:'center',
      alignItems:"center",
      borderRadius:15,
      borderColor:"#ddd300"
    },
    text:{
        fontSize:15,
        color:"white",
        fontWeight:"bold"
    }
})



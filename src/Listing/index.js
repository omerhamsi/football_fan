import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import TopScore from '../../components/TopScore';
class Listing extends Component {
    constructor(props){
        super(props)
        this.state={
          case:false
        }
    }
    icon_press=()=>{
        this.setState({
            case:!this.state.case
        })
    }
    renderItem=({item})=>{
        return(
            <TopScore item={item}/>
        )
    }
    render() {
        const data=[
            {
                id:1,
                name:"Buse Demir",
                score:"2450"
            },
            {
                id:2,
                name:"Buse Demir",
                score:"2055"
            },
            {
                id:3,
                name:"Buse Demir",
                score:"865"
            },
            {
                id:4,
                name:"Buse Demir",
                score:"358"
            },
            {
                id:5,
                name:"Buse Demir",
                score:"458"
            },
        ]
        return (
            <View style={style.container}>
                <View style={style.align}>
                    <View style={{ width: 60, height: 60, backgroundColor: "#151828", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                        <TouchableOpacity>
                            <Icon name="chevron-left" size={20} color="#6c7078" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                        <Text style={{ fontSize: 35, fontWeight: "bold", color: "#6d6aff" }}>SIRALAMA</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 15 }}>
                        <TouchableOpacity onPress={this.icon_press} style={[style.options,this.state.case?{backgroundColor:"#6d6aff"}:{backgroundColor:"#6f6aff"}]}>
                            <Icon name="award" size={25} color="white" />
                            <Text style={{ color: "white", fontSize: 8, fontWeight: "bold", marginTop: 5 }}>GÜNLÜK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.icon_press} style={[style.options,this.state.case?{backgroundColor:"#6d6aff"}:{backgroundColor:"#6f6aff"}]}>
                            <Icon name="star" size={25} color="white" />
                            <Text style={{ color: "white", fontSize: 8, fontWeight: "bold", marginTop: 5 }}>HAFTALIK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.icon_press} style={[style.options,this.state.case?{backgroundColor:"#6d6aff"}:{backgroundColor:"#6f6aff"}]}>
                            <Icon name="trophy" size={25} color="white" />
                            <Text style={{ color: "white", fontSize: 8, fontWeight: "bold", marginTop: 5 }}>KAZANANLAR</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <View style={style.local}>
                             <TouchableOpacity style={[style.opt_local],{width:70,backgroundColor:"black",borderRadius:15}}>
                                 <Text style={{color:"white"}}>YEREL</Text>
                             </TouchableOpacity>
                             <TouchableOpacity style={style.opt_local}>
                                 <Text style={{color:"#4c51bf"}}>GLOBAL</Text>
                             </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList 
                     data={data}
                     renderItem={this.renderItem}
                     keyExtractor={item => item.id}
                     style={{marginVertical:30}}
                    />
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        backgroundColor: "#090d15",
        height: "100%"
    },
    align: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    options: {
        width: 85,
        height: 85,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: "#6f6aff",
        marginRight: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    local:{
        width:200,
        height:30,
        backgroundColor:"#6d6aff",
        borderRadius:15,
        justifyContent:"space-around",
        alignItems:'center',
        flexDirection:"row"
    },
    opt_local:{
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Listing

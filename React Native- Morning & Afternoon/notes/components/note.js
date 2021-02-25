import React, { useEffect } from 'react';
import { View,Text, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Note(props)
{

    function deletenote()
    {
        // console.log("note to be deleted");
        props.deletenote(props.id);
    }
    return(
        <View>
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.desc}>{props.desc}</Text>
            <TouchableOpacity onPress={deletenote}>
                <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:"95%",
        alignItems:"center",
        marginTop:20,
        borderColor:"#50a3a2",
        borderRadius:5,
        borderWidth:3,
        margin:10,
        backgroundColor:"#9AC8B3"
    },
    title:{
        fontFamily:"sans-serif",
        fontSize:22,
        color:"white",
        fontWeight:"300",
        padding:10,
        borderBottomColor:"white",
        borderBottomWidth:1
    },
    desc:{
        color:"white",
        padding:10,
        fontSize:19
    },
    delete:{
        backgroundColor:"white",
        color:"#50a3a2",
        padding:5,
        margin:5,
        borderRadius:3,
        marginStart:"80%",
        textAlign:"center",
        width:70,
        height:35
    }
})
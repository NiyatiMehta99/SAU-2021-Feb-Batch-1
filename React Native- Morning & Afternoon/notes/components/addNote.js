import React, { useEffect } from 'react'
import { View,Text, Button, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react/cjs/react.development'

export default function addNote({route,navigation})
{
    const [newtitle,settitle]=useState("");
    const [newdesc,setdesc]=useState("");

    function submit()
    {
        navigation.navigate("Dashboard",{
           newtitle:newtitle,
           newdesc:newdesc
        })
    }

    return(
    <View style={styles.container}>
        <Text style={styles.header}>Add Note</Text>
        <TextInput placeholder="enter title" style={styles.title} onChangeText={(text)=>settitle(text)} />
        <TextInput placeholder="enter desc" style={styles.desc} onChangeText={(text)=>setdesc(text)} />
        <TouchableOpacity onPress={submit}>
            <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#50a3a2",
        alignItems:"center",
        fontFamily:"sans-serif",
        justifyContent:"center",
    },
    header:{
        fontSize:35,
        fontWeight:"100",
        color:"white",
        marginVertical:10
    },
    title:{
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"rgba(252, 252, 252, 0.7)",
        backgroundColor:"rgba(252, 252, 252, 0.2)",
        width:250,
        borderRadius:3,
        textAlign:"center",
        fontSize:18,
        fontWeight:"300",
        padding:10,
        color:"white",
        marginVertical:10
    },
    desc:{
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"rgba(252, 252, 252, 0.7)",
        backgroundColor:"rgba(252, 252, 252, 0.2)",
        width:250,
        height:200,
        borderRadius:3,
        textAlign:"center",
        fontSize:18,
        fontWeight:"300",
        padding:10,
        color:"white",
        marginVertical:10
    },
    button:{
        width:250,
        backgroundColor:"white",
        color:"#50a3a2",
        textAlign:"center",
        fontSize:20,
        padding:10,
        marginTop:10,
        borderRadius:3
    }
})
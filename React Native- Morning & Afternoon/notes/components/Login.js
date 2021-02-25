import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';

export default function Login({navigation})
{
    const [username,setUsername]=useState("")
    const [err,setErr]=useState("")

    useEffect(()=>{
        Auth();
    },[])

    async function Auth()
    {
        let username=await AsyncStorage.getItem("username");
        if(username)
            {
                console.log("present");
                navigation.navigate("Dashboard")
                
            }
    }

    function login()
    {
        if(!username)
        {
            setErr("Please enter a username!");
        }
        else{
            console.log(`Hello ${username}`),
            setErr("");
            AsyncStorage.setItem("username",username);
            navigation.navigate("Dashboard");

        }
    }

    return(
    <View style={styles.container}>
        <Text style={styles.title}>Hello {username}</Text>
        <TextInput placeholder="Enter your name" style={styles.textbox} onChangeText={(text)=>setUsername(text)}/>
        <Text style={styles.err}>{err}</Text>
        <TouchableOpacity onPress={login}>
            <Text style={styles.inputbutton}>Login</Text>
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
    title:{
        fontSize:35,
        fontWeight:"100",
        color:"white",
        marginVertical:10
    },
    textbox:{
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
        color:"white"
    },
    inputbutton:
    {
        width:250,
        backgroundColor:"white",
        color:"#50a3a2",
        textAlign:"center",
        fontSize:20,
        padding:10,
        marginTop:10,
        borderRadius:3
    },
    err:{
        color:"white",
        fontSize:15,
        marginTop:5        
    }
})




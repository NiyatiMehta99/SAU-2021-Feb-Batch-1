import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react/cjs/react.development";
import Note from "./note";

var noteslistman = [
  {
    title: "Thought for the day!",
    desc: "Always believe that something wonderful is about to happen!",
  },
  {
    title: "Favourite Quote",
    desc: "It does not do well to dwell on dreams and forget to live - Albus Dumbledore",
  },
  {
    title: "A Good Thought for life",
    desc: "You're here only for a short while. Make it worthwhile!",
  },
  {
    title:"Tech Lovers",
    desc:"I do not fear computers. I fear lack of them."
  }
];

export default function Dashboard({ navigation, route }) {
  const { newtitle="", newdesc="" } = route.params || {}
  //console.log(`${newtitle} and ${newdesc}`);

  const [notes, setNote] = useState(noteslistman);

  var newNote = {
    title: newtitle,
    desc: newdesc,
  };

  function addnotetolist() {
   // console.log(newNote);
    if(newtitle){
      setNote((prevNotes) => {
        return [newNote, ...prevNotes];
      });
     
    }
  }

  useEffect(() => {
    addnotetolist();
  }, [route.params]);

  var noteslist = notes.map((note, index) => (
    <Note
      title={note.title}
      desc={note.desc}
      key={index}
      deletenote={deletenote}
      id={index}
    />
  ));

  function deletenote(id) {
    // console.log(`note to be deleted ${id}`);
    setNote((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function addnote() {
    navigation.navigate("AddNote");
  }
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={addnote}>
        <Text style={styles.addnote}>Add new Note</Text>
      </TouchableOpacity>
      <Text style={styles.header}>My Notes</Text>
      {notes.length!=0?noteslist:<Text style={styles.nonote}>- - no notes - -</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sans-serif",
    marginTop: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "sans-serif",
    color: "#50a3a2",
    textAlign: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#50a3a2",
    borderTopColor: "#50a3a2",
    borderTopWidth: 1,
  },
  addnote: {
    textAlign: "center",
    backgroundColor: "#50a3a2",
    color: "white",
    fontFamily: "sans-serif",
    fontWeight: "300",
    padding: 10,
    marginBottom: 20,
    fontSize: 20,
    width: "75%",
    borderRadius: 5,
    alignSelf: "center",
  },
  nonote:{
    textAlign:"center",
    color:"#50a3a2",
    fontSize:20,
    padding:10,
    fontFamily:"sans-serif"
  }
});

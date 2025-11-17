import React,{useEffect,useState}from"react";
import {View,Text,TextInput,Button,FlatList}from"react-native";

export default function App(){
  const[tasks,setTasks]=useState([]);
  const[title,setTitle]=useState("");

  async function load(){
    const r=await fetch("https://756d99aed801e4.lhr.life/tasks");
    setTasks(await r.json());
  }
  async function add(){
    await fetch("https://756d99aed801e4.lhr.life/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title})});
    setTitle(""); load();
  }
  useEffect(()=>{load();},[]);

  return(<View style={{padding:20}}>
    <Text>Tarefas</Text>
    <TextInput value={title} onChangeText={setTitle} placeholder="Nova tarefa" style={{borderWidth:1,marginVertical:10}} />
    <Button title="Adicionar" onPress={add}/>
    <FlatList data={tasks} keyExtractor={i=>i.id} renderItem={({item})=><Text>{item.title}</Text>}/>
  </View>);
}

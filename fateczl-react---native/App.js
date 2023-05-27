import React, {useState} from 'react';

import {Text, View, TextInput, Button} from 'react-native';
 
 export default ()=>{
   const [nota1, setNota1] = useState("");
   const [nota2, setNota2] = useState("");
    return(
  <View style = {{backgroundColor: "#e7c6ff",
      flex : 1, justifyContent :'center',
      alignItems: "center"}}>


  <Text style={{fontSize:30, fontWeight:"bold"}}>
    Calculo de Média
  </Text>

    <Text/>

  <Text style ={{fontSize:24}}>
    Informe a primeira nota:
  </Text>
  <TextInput style ={{width:200, borderWidth: 2, borderRadius: 7}} value={nota1} onChangeText={setNota1}/>

    <Text/>

  <Text style ={{fontSize:24}}>
    Informe a segunda nota:
  </Text>
   <TextInput style ={{width:200, borderWidth: 2, borderRadius: 7}} value={nota2} onChangeText={setNota2}/>

     <Text/>

   <Button  color= "#b8c0ff" style = {{borderRadius :10 }}title= "Calcular"onPress={()=>{
     const n1=parseFloat(nota1);
     const n2=parseFloat(nota2);

     const m =(n1 +n2) /2;

     alert("Média: " + m)
   }} />


</View>
    );
 }
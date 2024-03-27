import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList,TouchableOpacity,Alert} from 'react-native';
import Firebase from '../Firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Home({navigation}){

const [diario, setDiario] = useState([]);

function deleteDiario(id){
  
  Firebase.collection("diario").doc(id).delete();

  Alert.alert("O diario foi Deletado.");
}

useEffect(()=>{
  Firebase.collection("diario").onSnapshot((query)=>{
    const lista=[];
    query.forEach((doc) =>{
      lista.push({...doc.data(),id: doc.id});
    });
  setDiario(lista);
  });
},[]);

  return(
<View style={estilo.container}>
  <View >
    <Text style={estilo.titulo}> Meu Diário </Text>
  </View>

  <FlatList 
  data={diario}
  renderItem={({item})=>{
   return(
     <View style={estilo.diarios}>

<TouchableOpacity onPress={()=>navigation.navigate("AlterarDiario",{
  id: item.id,
  titulo: item.titulo,
  texto: item.texto,
  data: item.data,
  local: item.local
})}>
    <View style={estilo.itens}>
<Text style={estilo.titulodiario}> Titulo: <Text style={estilo.textodiario}>{item.titulo} </Text></Text>
<Text style={estilo.titulodiario}> Texto: <Text style={estilo.textodiario}>{item.texto} </Text></Text>
<Text style={estilo.titulodiario}> Data: <Text style={estilo.textodiario}>{item.data} </Text></Text>
<Text style={estilo.titulodiario}> Local: <Text style={estilo.textodiario}>{item.local} </Text></Text>
    </View>
</TouchableOpacity>

    <View style={estilo.botaodeletar}>
<TouchableOpacity onPress={()=>{deleteDiario(item.id)}}>
 <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
</TouchableOpacity>

    </View>
    </View>
     );
  }}
  />
<TouchableOpacity style={estilo.addbutton} onPress={()=> navigation.navigate("CadDiario")}>
  <MaterialCommunityIcons name="plus-circle-outline" size={70} color="green" />
</TouchableOpacity>
</View>
   
  );
}

const estilo = StyleSheet.create({
container:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
},
titulo:{
  marginTop: 50,
  fontSize:30,
},
itens:{
  marginHorizontal: 10,
  marginVertical: 10,
  padding: 10,
 
},
titulodiario:{
fontSize: 13,
color:'#fff'
},
textodiario:{
fontSize: 15,
fontWeight: "bold",
},
diarios:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 10,
  marginVertical: 10,
  padding: 10,
  backgroundColor: '#0000CD',
  borderRadius:10
},
botaodeletar:{
  textAlignVertical: 'center',
  marginVertical: 10,

},
addbutton:{
backgroundColor: '#ffffff',
borderRadius: 50,
position: 'absolute',
left: 20,
bottom: 40,
justifyContent: "center",
alignItems: "center"
}
});
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import Firebase from '../Firebase';

export default function CadMusica({navigation}) {
  const [musica, setMusica] = useState(null);
  const [genero, setGenero] = useState(null);
  const [banda, setBanda] = useState(null);

  function addMusica() {
    Firebase.collection('musica').add({
      artistabanda: banda,
      genero: genero,
      musica: musica,
    });
    setBanda({banda:''})
    setGenero({genero: ''})
    setMusica({musica: ''})
  Alert.alert("Cadastro", "Música cadastrada com sucesso")
navigation.navigate("Home")
  }

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> Cadastre Suas {'\n'} Músicas</Text>
      </View>
      <TextInput autoCapitalize = 'words' style={estilo.input} placeholder="Digite a Banda/Artista" onChangeText={setBanda} value={banda}/>
      <TextInput style={estilo.input} placeholder="Digite o Genêro da música" onChangeText={setGenero} value={genero}/>
      <TextInput style={estilo.input} placeholder="Digite o nome da Música" onChangeText={setMusica} value={musica}/>
      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          addMusica();
        }}>
        <Text style={estilo.btntxtenviar}> Enviar </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#9ac234',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    borderRadius: 10,
  },
  btnenviar: {
    marginTop: 20,
  },
  btntxtenviar: {
    fontSize: 25,
  },
  titulo: {
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
  },
});

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import colors from './colors';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if(email === '' && password === ''){
      navigation.navigate('cards')
    } else {
      alert('Email ou senha inválidos!')
    }
  };

  const Cadastrar = () => {
    navigation.navigate('user')
  }

  return (
    <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Cadastrar}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borda,
    backgroundColor: colors.textFundo,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: colors.botaoPrincipal,
    borderRadius: 5,
    padding: 15,
    margin: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.botaoTexto,
    fontWeight: 'bold',
  },
});

export default Login;
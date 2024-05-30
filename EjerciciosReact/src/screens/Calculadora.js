import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from 'react';


const App = ({ navigation }) => {

  const irPantalla1 = async () => {
    navigation.navigate('Pantalla1');
  };

  //state de la app
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const restar = () => {
    let resta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resta)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const multiplicar = () => {
    let multiplicar = parseFloat(numero1) * parseFloat(numero2);
    setResultado(multiplicar)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const dividir = () => {
    let dividir = parseFloat(numero1) / parseFloat(numero2);
    setResultado(dividir)
    //Alert.alert("El resultado de la suma es: " + suma)
  }

  const reset = () => {
    setResultado(0);
    setNumero1(0)
    setNumero2(0)
  }

  return (
    <View style={styles.container}>
      <Text> App Para Sumar, Restar, Multiplicar y Dividir 2 Nùmeros</Text>
      <Input
        title_placeholder={'Ingrese numero 1: '}
        numero={numero1}
        setNumero={setNumero1}
      />
      <Input
        title_placeholder={'Ingrese numero 2: '}
        numero={numero2}
        setNumero={setNumero2}
      />

      <Button
        title_button={'Sumar'}
        action_button={sumar} />

      <Button
        title_button={'Restar'}
        action_button={restar} />

      <Button
        title_button={'Multiplicar'}
        action_button={multiplicar} />

      <Button
        title_button={'Dividir'}
        action_button={dividir} />

      <Text>Resuldato de la operaciòn es: {resultado}</Text>

      <Button
        title_button={'Restablecer'}
        action_button={reset} />

      <Button
        title_button='Ir a el TodoList'
        action_button={irPantalla1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    backgroundColor: 'lightgrey',
    width: 150,
    padding: 15,
    color: 'black',
    margin: 10
  }
});


export default App;

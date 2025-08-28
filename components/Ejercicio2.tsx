import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

export default function Ejercicio2(){
const [contador, setContador] = useState(0);
const incremento = () => setContador(contador + 1);
useEffect(() => {
    console.log("El contador cambió:", contador);
  }, [contador]);
return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Sumar" onPress={incremento} />
    </View>
  );
}

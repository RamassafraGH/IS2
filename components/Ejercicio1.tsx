import { useState } from "react";
import { Text, View } from 'react-native';

export default function Ejercicio1(){
const [nombre, setNombre] = useState("Ramiro");
return (
      <Text>{nombre}</Text>
  );
}
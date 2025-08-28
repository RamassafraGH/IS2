import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Sumar" onPress={incrementar} />
    </View>
  );
}

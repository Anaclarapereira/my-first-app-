import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Formulario, { Campo } from '@/components/formulario';

export default function HomeScreen() {
  return (
    <View style={(flex: 1)}>
      <Formulario/> 
      <Campo name="Nome" placeholder="Digite seu nome"/>
      <Campo name="Idade" placeholder="Digite sua idade"/>
      <Campo name="E-mail" placeholder="Digite seu e-mail"/>
      <Campo name="Password" placeholder="Digite sua senha"/>
      <Campo name="CEP" placeholder="Digite seu CEP"/>
      <Campo name="Rua" placeholder="Digite sua Rua"/>
      <Campo name="Cidade" placeholder="Digite sua cidade"/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

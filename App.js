
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';

import Danilo from './SRC/components/Danilo/index';
import Maria from './SRC/components/Maria/main';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Prova 3B3 lado A 18/03/2024</Text>
   
      <Danilo/>
      <Maria/>

      <StatusBar style="auto"/>
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
});

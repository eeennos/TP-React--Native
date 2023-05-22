import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import { EcranAcceuil, CalculatriceScreen,} from './screens';
import { NavigationTabs } from './navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <Stack.Navigator>
        <Stack.Screen  name="NavigationTabs" component={NavigationTabs}
        options={{
          headerShown: false,
        }}/>
      <Stack.Screen 
      name="EcranAcceuil"
      component={EcranAcceuil}/>
      <Stack.Screen 
        name="CalculatriceScreen"
        component={CalculatriceScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:16,
  },
  imageAcceuil: {
    width: 256,
    height: 256,
    borderRadius:256,
  },
});

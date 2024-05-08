import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from '../screens/home/HomeScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <SafeAreaProvider style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={ HomeScreen } />
            </Stack.Navigator>
        </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
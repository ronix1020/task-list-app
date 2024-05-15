import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from '../interfaces/RootStackParamList';
import HomeScreen from '../screens/home/HomeScreen';
import TaskScreen from '../screens/tasks/TaskScreen';
import {Provider} from 'react-redux';
import {reduxStore} from '../redux/store';
import ListScreen from '../screens/list/ListScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={reduxStore}>
        <SafeAreaProvider
          style={{flex: 1}}
          initialMetrics={{
            frame: {x: 0, y: 0, width: 0, height: 0},
            insets: {top: 0, left: 0, right: 0, bottom: 0},
          }}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tasks" component={TaskScreen} />
            <Stack.Screen name="List" component={ListScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

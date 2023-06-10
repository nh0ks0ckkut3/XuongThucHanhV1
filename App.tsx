import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView } from 'react-native';
import { UserStack } from './navigation/NavStackUser/UserStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <UserStack />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
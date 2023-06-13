import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={{ color: 'black' }}>Hello world</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

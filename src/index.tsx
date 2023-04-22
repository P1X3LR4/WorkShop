/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';

function App(): JSX.Element {
  return (
    <View className="flex-1 items-center justify-center px-10 bg-zinc-900">
      <Text className="text-zinc-200">APP</Text>
      <Font color={'#1919'} name="card" size={48} />
    </View>
  );
}

export default App;

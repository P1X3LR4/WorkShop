import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  return (
      <View className="flex-1 bg-zinc-900/100 p-4">
        <View className="flex flex-col ">
          <Text
            className="text-2xl text-zinc-200 font-mono font-extrabold"
            key={1}>
            Nome do Evento
          </Text>
          <Text className="text-zinc-500 text-base" key={2}>
            Sexta, 4 de Novembro de 2022
          </Text>
        </View>

        <View className="flex-row items-center justify-center gap-2 mt-8">
          <TextInput className="bg-zinc-800 rounded flex-1 p-4 text-zinc-50 text-base" />
          <TouchableOpacity className="p-4 bg-green-500 rounded">
            <Icon name="plus" color={'rgb(228,228,231)'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

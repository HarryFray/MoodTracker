import React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../App.provider';

import { MoodItemRow } from '../components/MoodItemRow';

export const History: React.FC = () => {
  const AppContext = useAppContext();

  return (
    <View>
      <Text>{AppContext.greeting}</Text>
      {AppContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

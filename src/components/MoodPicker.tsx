import React, { useState, FC } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { MoodOptionType } from '../types';

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>(
    moodOptions[0],
  );
  return (
    <View style={styles.moodOptions}>
      {moodOptions.map(option => {
        const { description, emoji } = option;
        const selected = selectedMood.emoji === emoji;
        return (
          <View key={emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[styles.moodItem, selected ? styles.selected : null]}>
              <Text>{emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>{selected ? description : ''}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#454C73',
    borderColor: 'white',
    borderWidth: 2,
  },
  descriptionText: {
      color:'#454C73',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 10,
  }
});

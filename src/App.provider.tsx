import React, { useState } from 'react';
import { MoodOptionWithTimestamp, MoodOptionType } from './types';

type AppContextType = {
  greeting: string;
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const defaultValue = {
  greeting: '',
  moodList: [],
  handleSelectMood: () => {},
};

export const useAppContext = () => React.useContext(AppContext);

const AppContext = React.createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, { mood, timestamp: Date.now() }]);
  }, []);

  return (
    <AppContext.Provider
      value={{ greeting: 'fart', moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

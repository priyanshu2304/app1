import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React from 'react';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.whiteText}>
        AppPro
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000a9',
  },
  whiteText: {
    color: '#fff',
  },
  DarkText: {
    color: '#000',
  },
});

export default AppPro;

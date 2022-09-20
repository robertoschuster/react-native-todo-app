import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Home } from "./src/screens/Home";
import { colors } from "./src/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.gray700} translucent={false} />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
});

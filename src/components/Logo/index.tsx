import React from 'react';
import { View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useFonts } from 'expo-font';

const logo = require('../../../assets/logo.png')
import { colors } from "../../config/colors";
import { styles } from "./styles";

let customFonts = {
  'Inter-Black': require('../../../assets/fonts/Inter-Black.otf'),
  // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
};

export function Logo() { 
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="rocket-outline" size={32} color={colors.colorNeutral} />
      </View>
      <Text style={{fontFamily: 'Inter-Black', ...styles.textTo}}>to</Text>
      <Text style={{fontFamily: 'Inter-Black', ...styles.textDo}}>do</Text>
    </View>
  );
}
import { StyleSheet } from 'react-native';

import { colors } from "../../config/colors";


export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconContainer: {
    marginRight: 8,
  },
  
  textTo: {
    color: colors.colorOne,
    fontSize: 36,
  },
  
  textDo: {
    color: colors.colorTwoDark,
    fontSize: 36,
  },

})
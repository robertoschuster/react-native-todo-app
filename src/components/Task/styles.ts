import { StyleSheet } from 'react-native';

import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  
  container: {
    backgroundColor: colors.gray500,
    borderColor: colors.gray400,
    borderWidth: 1,
    height: 64,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  doneButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.gray500,
    borderColor: colors.colorOne,
    borderWidth: 1,
    marginRight: 16,
  },

  doneButtonFinished: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: colors.colorTwoDark,
    borderColor: colors.colorTwoDark,
    borderWidth: 1,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  trashButton: {
    marginLeft: 12,
  },

  text: {
    flex: 1,
    color: colors.gray100,
    fontSize: 14,
    lineHeight: 22,
  },

  textFinished: {
    flex: 1,
    color: colors.gray300,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },

});
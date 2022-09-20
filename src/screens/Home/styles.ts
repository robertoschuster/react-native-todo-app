import { StyleSheet } from 'react-native';

import { colors } from "../../config/colors";

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },

  backgroundTop: {
    backgroundColor: colors.gray700,
    height: 142,
  },
  
  logoWrapper:{
    alignItems: 'center',
    marginTop: 42,
  },

  /**
   * New task
   */

   newTaskContainer: {
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    top: -26,
  },

  newTaskInput: {
    flex: 1,
    backgroundColor: colors.gray500,
    height: 54,
    borderRadius: 6,
    paddingLeft: 16,
    color: colors.gray100,
    fontSize: 16,
  },

  newTaskButton: {
    backgroundColor: colors.colorOneDark,
    height: 52,
    width: 52,
    borderRadius: 6,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  newTaskButtonText: {
    color: colors.gray100,
  },
  
  /**
   * Tasks Info
   */

  tasksContainer: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  
  tasksInfoContainer: {
    height: 19,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tasksInfoCreatedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  tasksInfoCreatedText: {
    color: colors.colorOne,
    fontSize: 14,
    fontWeight: 'bold',
  },

  tasksInfoDoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  tasksInfoDoneText: {
    color: colors.colorTwo,
    fontSize: 14,
    fontWeight: 'bold',
  },


  tasksInfoCountContainer: {
    backgroundColor: colors.gray400,
    height: 19,
    width: 25,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  tasksInfoCountText: {
    color: colors.gray200,
    fontSize: 14,
    fontWeight: 'bold',
  },

  /**
   * Tasks List
   */

  tasksListContainer: {      
    flex: 1,
  },

  tasksListEmptyContainer: {      
    height: 208,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },

  tasksListEmptyIcon: {      
    height: 56,
    width: 56,
  },

  tasksListEmptyTextBold: {      
    color: colors.gray300,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16,
    padding: 1,
  },
  
  tasksListEmptyText: {      
    color: colors.gray300,
    fontSize: 14,
    padding: 1,
  },
  
});
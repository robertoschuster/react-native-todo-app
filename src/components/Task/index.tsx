import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { colors } from "../../config/colors";
import { styles } from "./styles";

type TaskType = {
  id: Number,
  description: string,
  isDone: boolean,
}

type Props = {  
  task: TaskType,
  onFinish: () => void,
  onRemove: () => void,
}


function Task({ task, onFinish, onRemove }: Props) {

  function handleFinish() {



    onFinish();
  }

  return (
    <View style={styles.container}>
      { task.isDone ? (
          <TouchableOpacity style={styles.doneButtonFinished} onPress={handleFinish}>
            <Icon name="done" size={12} color={colors.gray100} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.doneButton} onPress={handleFinish} />
        ) 
      }

      <Text style={task.isDone ? styles.textFinished : styles.text}>{ task.description }</Text>

      <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
        <Icon name="delete-forever" size={24} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  )
}

export { Task, TaskType }
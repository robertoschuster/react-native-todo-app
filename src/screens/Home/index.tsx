import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Logo } from "../../components/Logo";
import { colors } from "../../config/colors";
import { Task, TaskType } from "../../components/Task";

import { styles } from "./styles";

export function Home() {

  const [taskDescription, setTaskDescription] = useState('');
 
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [tasksCount, setTasksCount] = useState(tasks.length);
  const [tasksDoneCount, setTasksDoneCount] = useState(tasks.filter(t => t.isDone).length);
  
  function handleFinishTask(id: Number) {

    const updatedTasks = tasks.map((t) => {
      if (t.id === id){
        t.isDone = !t.isDone;
        setTasksDoneCount(t.isDone ? tasksDoneCount + 1 : tasksDoneCount - 1);
      }

      return t;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(task: TaskType) {
    setTasks(tasks.filter((t) => t.id !== task.id))

    if (tasksCount > 0) {
      setTasksCount(tasksCount - 1);
    }

    if (tasksDoneCount > 0 && task.isDone) {
      setTasksDoneCount(tasksDoneCount - 1);
    }
  }

  function handleAddTask(description: string) {
    if (!description) return;

    setTasks([{ id: tasks.length + 1, description, isDone: false }, ...tasks]);
    setTaskDescription('');    
    setTasksCount(tasksCount + 1);
  }

  return (
    <>
      <View style={styles.backgroundTop}>
        <View style={styles.logoWrapper} >
          <Logo />
        </View>
      </View>

      <View style={styles.container}>

        {/* New task  */}

        <View style={styles.newTaskContainer}>
          <TextInput 
            style={styles.newTaskInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray300}
            value={taskDescription}
            onChangeText={(value) => setTaskDescription(value)}
            returnKeyType="done"            
            onSubmitEditing={() => handleAddTask(taskDescription)}
            
          />
          <TouchableOpacity style={styles.newTaskButton} onPress={() => handleAddTask(taskDescription)}>
            <Text style={styles.newTaskButtonText}>
            <Icon name="add" size={16} color={colors.gray100} />
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tasks */}

        <View style={styles.tasksContainer}>

          {/* Info */}

          <View style={styles.tasksInfoContainer}>
            <View style={styles.tasksInfoCreatedContainer}>
              <Text style={styles.tasksInfoCreatedText}>Criadas</Text>
              <View style={styles.tasksInfoCountContainer}>
                <Text style={styles.tasksInfoCountText}>{ tasksCount }</Text>
              </View>
            </View>

            <View style={styles.tasksInfoDoneContainer}>
              <Text style={styles.tasksInfoDoneText}>Concluídas</Text>
              <View style={styles.tasksInfoCountContainer}>
                <Text style={styles.tasksInfoCountText}>{ tasksDoneCount }</Text>
              </View>
            </View>
          </View>

          {/* Tasks List */}

          <View style={styles.tasksListContainer}>

            <FlatList 
              data={tasks} 
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Task 
                  task={item}
                  onFinish={() => handleFinishTask(item.id)}
                  onRemove={() => handleRemoveTask(item)}
                />  
              )}
              showsVerticalScrollIndicator={false} 
              ListEmptyComponent={() => (
                <View style={styles.tasksListEmptyContainer}>
                  <Icon name="verified" size={52} color={colors.gray400} />
                  <Text style={styles.tasksListEmptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
                  <Text style={styles.tasksListEmptyText}>Crie tarefas e organize seus itens a fazer</Text>
                </View>  
              )}
            />

          </View>

        </View>

      </View>
    </>

  )
}
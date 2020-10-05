import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TODOS } from '../utils/data';

export default function CompleteScreen() {
  const [task, setTask] = React.useState(TODOS);
  const TodoItem = (td, idx, key) => {
    return (
      <TouchableOpacity
        key={td.td.body}
        style={styles.todoItem}
      >
        <Text style={styles.todoText}>
          {td.idx + 1}: {td.td.body}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      {task.map((todo, idx) => {
        if (todo.status == "Active")
          return (
            <TodoItem
              idx={idx}
              td={todo}
              key={idx}
            />
          );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  todoItem: {
    padding: 20,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#3366ff'
  },
  todoText: {
    fontFamily: 'Montserrat',
    color: 'black',
    fontSize: 20,
  }
});

import * as React from 'react';
import {
  Alert, StyleSheet, TextInput, TouchableOpacity, ScrollView,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TODOS } from '../utils/data';
export default function AllTodoScreen(props: any) {
  const [todoList, setTodoList] = React.useState(TODOS);
  const [todoBody, setTodoBody] = React.useState('');
  const onToggleTodo = (id: number) => {
    const todo = todoList.find(todo => todo.id === id);
    todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);
    setTimeout(() => {
      props.navigation.navigate('SingleTodoScreen', {
        updatedTodo: todo
      });
    }, 500);
  };
  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: 'Active',
      id: todoList.length + 1
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody('');
  };
  const onDeleteTodo = (id: number) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };
  const onLongPress = (todo: { status?: string; body: any; id: any; }) => {
    const prompt = `"${todo.body}"`;
    console.log('delete');
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  const TodoItem = (props: { todo: { status: string; body: {} | null | undefined; id: any; }; onToggleTodo: (arg0: any) => void; onDeleteTodo: (arg0: any) => void; idx: number; }) => {
    const statusStyle = {
      backgroundColor: props.todo.status === "Done" ? "blue" : "green"
    };
    return (
      <TouchableOpacity
        key={props.todo.body}
        style={[styles.todoItem, statusStyle]}
        onPress={() => props.onToggleTodo(props.todo.id)}
        onLongPress={() => onLongPress(props.todo)}
      >
        <Text style={styles.todoText}>
          {props.idx + 1}: {props.todo.body}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground style={styles.container} source={require('../assets/images/background.jpg')}>
      <KeyboardAvoidingView
        enabled
        behavior="padding"
      >
        <ScrollView style={{ flex: 1 }}>
        <View style={{ marginTop: "200%" }}>
          {todoList.map((todo, idx) => {
            return (
              <TodoItem
                idx={idx}
                todo={todo}
                key={todo.body}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
              />
            );
          })}
          <View style={styles.inputContainer}>
            <TextInput
              value={todoBody}
              style={styles.todoInput}
              onChangeText={text => setTodoBody(text)}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
  </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 50,
    width: '95%',
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'white',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey'
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
    // marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  scrollView: {
    flex: 1,
    paddingTop: 1000
  }
});
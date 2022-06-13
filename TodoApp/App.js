/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  const addTask = () => {
    if (task.length) {
      setTodo([...todo, {title: task, done: false}]);
      setTask('');
      Keyboard.dismiss();
    }
  };

  const deleteTask = index => {
    const tempTodo = [...todo];
    tempTodo.splice(index, 1);
    setTodo(tempTodo);
  };

  const markDone = index => {
    const tempTodo = [...todo];
    tempTodo[index].done = !tempTodo[index].done;
    setTodo(tempTodo);
  };

  return (
    <View style={[styles.container]}>
      <Text style={[styles.heading]}>Todo's</Text>
      <ScrollView style={[styles.list]}>
        <View>
          {todo.map((e, i) => (
            <View style={[styles.todo]} key={i}>
              <TouchableOpacity
                onPress={() => {
                  markDone(i);
                }}
                style={[{flexDirection: 'row', alignItems: 'center'}]}>
                {e.done && (
                  <Text style={[{fontSize: 20, marginRight: 5}]}>+</Text>
                )}
                <Text
                  style={[styles.todoItem, {color: e.done ? 'red' : 'black'}]}>
                  {e.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteTask(i);
                }}
                style={[styles.delete]}>
                <Text style={[{fontSize: 20, fontWeight: 'bold'}]}>-</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={[styles.addBar]}>
        <TextInput
          style={[styles.input]}
          value={task}
          onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={addTask} style={[styles.addButton]}>
          <Text style={[{fontSize: 30}]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    backgroundColor: 'lightgray',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 20,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoItem: {
    color: 'lightgray',
    fontSize: 20,
  },
  heading: {
    color: 'red',
    fontSize: 25,
    marginLeft: 8,
    marginVertical: 5,
  },
  list: {
    flexDirection: 'column',
    paddingVertical: 10,
    backgroundColor: 'yellow',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 30,
    paddingHorizontal: 16,
    fontSize: 16,
    width: '85%',
  },
  container: {
    height: '100%',
  },
  addBar: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 30,
    height: 48,
    width: 48,
  },
  delete: {},
});

export default App;

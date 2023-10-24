import {useState} from 'react';
import {StyleSheet, View, FlatList, Button, Text, Image} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { ImageBackground } from 'react-native';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals, {text: enteredGoalText, 
        id: Math.random().toString()},
      ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);

    });
  }

  return (
    <View style={styles.container}>
      <Button
        title='Add groceries' 
        color="#395144" 
        onPress={startAddGoalHandler}
        type="outline"
      />
     <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} /> 
      <View style={styles.listContainer}>
        <FlatList data={courseGoals} 
        renderItem={(itemData) => {
            return(
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id} 
              onDeleteItem={deleteGoalHandler} 
            />
            );
        }} 
        keyExtractor={(item, index) => {return item.id}}
        alwaysBounceVertical={false}/>
        <View>
        <Image source={require ('./assets/img/basket.png')} style={styles.img} />
        <Text style={styles.txt}>
            Tip: You could easily delete your list by tapping the item you've already bought ( •̀ ω •́ )/
        </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingTop: '10%',
    flex: 5,
  },
  txt: {
    paddingBottom: '8%',
    textAlign: 'center',
    color: '#395144',
    opacity: 0.5,
  },
  img: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
    opacity: 0.2,
    alignSelf: 'center',
  },
});

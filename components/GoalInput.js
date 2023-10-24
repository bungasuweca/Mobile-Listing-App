import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image, } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require ('../assets/img/grocery.png')} style={styles.img} />
                <TextInput
                    style={styles.textInput}
                    placeholder="What to buy today?"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <Button title="Add list" color={'#395144'} onPress={addGoalHandler} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" color={'#AA8B56'} onPress={props.onCancel} />
                    </View>
                </View>
        </View>
      </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#ccc',
        backgroundColor: '#F7F5EB',
    },
    textInput: {
        // backgroundColor: '#F0EBCE',
        borderWidth: 1,
        borderColor: '#8B7E74',
        width: '90%',
        padding: 8,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',

    },
    btn: {
        width: 150,
        marginHorizontal: 10,
    },
    img: {
        width: 100,
        height: 100,
        margin: 20,
    },


});
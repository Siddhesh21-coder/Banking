import React from 'react';
import Info from './src/components/screen/info';
export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View >
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.txt1}>Credit Card: 1</Text>
              <Text style={styles.txt1}> Debit Card: 2 {"\n"}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        </View>
  );
}


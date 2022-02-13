import React,{useState} from 'react';
import { StyleSheet,Pressable, Text, View, Image, Modal, TextInput } from 'react-native';
import Cont from '../../2ndview';
export default function Info() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.container,{flexDirection:"column"}]}>
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

      <View style={styles.infobox}>
        <View style={[styles.infobox1,{flexDirection: "row"}]}>
          <View style={[styles.des,{flexDirection:"column"}]}>
          <Text style={styles.txt1}>{"\n   "}Name:</Text>
          <Text style={styles.txt}>{"  "}Siddhesh Kushare</Text>
          <Text style={styles.txt1}>{"\n   "}Acc. No:</Text>
          <Text style={styles.txt}>{"  "}1600 7892 1342 5000</Text>
          </View>
          <View style={[styles.img,{flexDirection:'column'}]}>
          <Text style={[styles.txt1,{fontSize: 7}]}>{"\n"}</Text>
          <Image
        style={styles.lg}
        source={{
          uri: 'https://cdn1.vectorstock.com/i/1000x1000/23/40/golden-eagle-with-black-background-vector-21412340.jpg',
        }}
      />
          </View>
          </View>
          
          <View style={[styles.container2,{flexDirection:"row"}]}>
            <View style={styles.line}>
          <Text style={styles.txt1}>{"\n   "}Acc. Type:</Text></View>
          <View style={styles.line1}>
          <Text style={styles.txt1}>{"\n"}Account Balance:</Text></View></View>
          <View style={[styles.container2,{flexDirection:"row"}]}>
            <View style={styles.line}>
          <Text style={styles.txt}>{"  "}Current</Text></View>
          <View style={styles.line1}>
          <Text style={styles.txt}>{""}Rs. 13400.45</Text></View></View>
          
          
        </View>
        <Text>{"\n"}</Text>
        <View style={[styles.container12,{flexDirection:"column"}]}>
        <Cont />
        <Text>{"\n"}</Text>
        <Cont /></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#C0C0C0',
    padding:20,
    
  },
  container1: {
    flex: 2,
    backgroundColor: '#C0C0C0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container12: {
    flex: 2,
    backgroundColor: '#C0C0C0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container2: {
    
    backgroundColor: '#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  des: {
    flex: 2,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor:'#202020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    
    
  },
  lg:
  {
    width: 80,
    height: 80,
    opacity:1,
    borderRadius:100,
    backgroundColor: '#202020',
  },
  line: {
    flex: 1,
    alignItems:'flex-start',
  },
  line1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  
  infobox: {
      flex: 1,
      backgroundColor: '#202020',
      borderRadius: 15,
      alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  infobox1: {
    
    backgroundColor: '#202020',
    borderRadius: 15,
    alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
  txt: {
    color: '#FFD700',
    fontSize: 21,
    
  },
  txt1: {
    color: '#918E85',
    fontSize: 14,
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#202020",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
   
});

import React,{useState} from 'react';
import { StyleSheet,Pressable, Text, View, Image, Modal, TextInput } from 'react-native';
export default function Cont() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[styles.container12,{flexDirection:"row"}]}>
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
<View style={styles.box}>
      
      <Pressable
        
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.txt}>Card Details</Text>
      </Pressable>
      </View>
      <View style={styles.box}>
      
      <Pressable
        
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.txt}>Card Details</Text>
      </Pressable>
      </View>
      <View style={styles.box}>
      
      <Pressable
        
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.txt}>Card Details</Text>
      </Pressable>
      </View>
      <View style={styles.box}>
      
      <Pressable
        
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.txt}>Card Details</Text>
      </Pressable>
      </View>
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
     
      backgroundColor: '#C0C0C0',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
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
  
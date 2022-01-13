import React,{useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';
import debounce from'lodash.debounce';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

const Home = ({navigation, route}) => {
  
  const [reviews, setReviews] = useState([
    {title: "Red Dead Redemption II", rating: 5, body: "Red Dead Redemption 2 is a sprawling Western tale of loyalty, conviction, and the price of infamy, chronicling the inevitable collapse of a motley crew of Wild West holdouts kicking against the slow march of civilisation and industrialisation.", key:'1'},
    {title: "Tom Clancy's The Division 2", rating: 3, body: "More than any freshly launched shared-world shooter to date, Tom Clancy’s The Division 2 presents a polished, well-thought-out initial progression path with at least some gas left in the tank after the fact.", key:'2'},
    {title: "Shadow of the Tomb Raider", rating: 4, body: "A bigger world, higher stakes, and an unexpected spin on Lara Croft’s character make Shadow of the Tomb Raider the most ambitious of the modern trilogy.", key:'3'},
  ]);

  const [openModal, setOpenModal] = useState(false);

  const submitHandler = (values) => {
    setReviews([
      ...reviews,
      {...values,key: Math.random().toString()}
    ]);
    setOpenModal(!openModal);
  }

  const deleteReview = (key) => {
    const newState=[...reviews]
    for(let i=0; i < newState.length; i++) {
      if(newState[i].key === key) {
        newState.splice(i,1);
      }
    }
    setReviews(newState)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TouchableOpacity style={{...styles.modalToggle, ...styles.modalClose,...styles.button}} onPress={()=>setOpenModal(!openModal)}>
              <MaterialIcons 
                name='close'
                size={24}
              />
            </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <ReviewForm onSubmit={submitHandler}/>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={()=>setOpenModal(!openModal)}>
        <MaterialIcons 
          name='add'
          size={24}
          style={styles.modalToggle}
        />
      </TouchableOpacity>
      
      <Text></Text>
      <Text style={globalStyles.title}>List of Games</Text>
      <Text></Text>
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity style={globalStyles.titleText} onPress={debounce(
            () =>
            navigation.push('ReviewDetails', {item, deleteReview}), 500,{
              'leading': true,
              'trailing': false
            }
          )}>
            <Card>
              <Text style={globalStyles.titleText}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home

const styles= {
  modalContent: {
    flex:1
  },
  modalToggle: {
    margin:4,
    padding:10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop:30,
    marginBottom:0
  },
  button:{
    borderRadius:6,
    elevation:3,
    backgroundColor:'#fff',
    shadowOffset: {
      width:1,
      height:1
    },
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6
  }
}
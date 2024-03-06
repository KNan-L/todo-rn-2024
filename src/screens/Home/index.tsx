import { useState } from "react"

import { Alert, FlatList, Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'
import TrashIcon from 'react-native-vector-icons/EvilIcons'
import Circle from 'react-native-vector-icons/Feather'
import { styles } from './styles'

//import  { Notes } from "../../components/Notes";

import LogoTodo from '../../assets/Logo.png'
import ClipBoard from '../../assets/Clipboard.png'

export default function Home(){
  const [notes, setNotes] = useState<string[]>([])    
  const [note, setNote] = useState('')  
  const [countNotes, setCountNotes] = useState(0)
  const [countConcludeNotes, setCountConcludeNotes] = useState(0)
  

  function handleNoteAdd(){
    setNotes(prevstate => [...prevstate, note])
    setNote('')  

    setCountNotes(countNotes + 1)    
  }

  function handleNoteRemove( textNote: string ){
    Alert.alert("Remover", `Deseja remover a nota ${textNote}?`,[
      {
        text:'Não',
        style:'cancel'
      },

      {
        text: 'Sim',
        onPress: () =>setNotes(prevstate => prevstate.filter(note => note !== textNote))
      }
    ])
  }

  function handleConcludeNote(){
    setCountConcludeNotes( countConcludeNotes + 1)
  }


  return (
    <View style={styles.container}>
      
      <View style={styles.containerLogo}>      
          <Image style={styles.logo} source={LogoTodo} />  
      </View>
          
      <View style={styles.containerInput}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={'#808080'} 
            onChangeText={setNote}
            value={note}           
          />

          <TouchableOpacity style={styles.button} onPress={handleNoteAdd}>
            <Text style={styles.buttonText}>
              <Icon name="pluscircleo" size={16} color="#FFF" />
            </Text>
          </TouchableOpacity>
      </View>

      <View style={styles.containerStatus}>    
        <View style={styles.conteinerNoteCriadas}>
          <Text style={styles.notesCriadas}>
            Criadas   
          </Text>
          <View style={styles.bgcountNotes}>
            <Text style={styles.countNotes}>{countNotes}</Text>
          </View>
        </View>     
                 
        <View style={styles.conteinerNoteConcluidas}>
          <Text style={styles.notesConcluidas}>
            Concluidas
          </Text>
          <View style={styles.bgcountNotes}>
            <Text style={styles.countNotes}>{countConcludeNotes}</Text>
          </View>
        </View>
      </View>

      {/*<Icon name="checkcircle" size={20} color='#5E60CE'/>*/}

      <FlatList 
        style={styles.containerList}
        data={notes}
        keyExtractor={item => item}
        renderItem={({item}) => 
          <View style={styles.containerNotes}>
            <TouchableOpacity style={styles.clickNote} onPress={handleConcludeNote}>                         
              <Circle name="circle" size={20} color="#4EA8DE"/>
              <Text style={styles.NotesText}>{item}</Text>
            </TouchableOpacity>            

            <TouchableOpacity onPress={() => handleNoteRemove(item)}>
              <TrashIcon name="trash" size={20} color="#FFF"/>
            </TouchableOpacity>
          </View>
        }        

        showsVerticalScrollIndicator={false}

        ListEmptyComponent={
          <View style={styles.emptyList}>
            <Image style={styles.clipboard} source={ClipBoard} />
            <Text style={styles.emptyListTitle}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyListSubTitle}>Crie tarefas e organize seus itens a fazer</Text>
          </View>            
        }
      />        
      
    </View>    
  )
}
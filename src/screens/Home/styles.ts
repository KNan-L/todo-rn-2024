import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1A1A1A',   
  },

  containerLogo:{    
    padding: 24,
    backgroundColor: '#0D0D0D',    
    alignItems:'center', 
    paddingBottom: 40 
  },

  logo:{
    marginTop: 24,
    width: 110,
    height: 32, 
    marginBottom: 20    
  },

  containerInput:{      
    width: '90%',
    flexDirection: 'row',       
    alignSelf:'center',
    marginTop: -30
  },

  input:{          
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 5,

    paddingLeft:10,          
    fontSize: 16,
    color: '#808080',
    marginRight: 7,   
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',   
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
  },

  buttonText: {
    color: '#FFF',
  },

  containerStatus: {  
    width: '85%',
    flexDirection:'row',
    alignSelf:'center',
    marginTop: 25,    
  },

  conteinerNoteCriadas:{
    flex: 1,
    flexDirection:'row',     
  },

  conteinerNoteConcluidas:{
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection:'row',     
  },

  notesCriadas:{       
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },

  notesConcluidas:{        
    alignContent:'flex-end',    
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA',
  },

  bgcountNotes:{
    width: 20,    
    backgroundColor: '#333333',  
    alignItems:'center',
    marginLeft: 10,
    borderRadius: 6,       
  },

  countNotes:{       
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight:'bold'        
  },

  containerList: {    
    alignSelf:'center',
    width: '90%',    
    marginTop: 20,
  },

  emptyList:{    
    borderTopWidth: 1,
    borderTopColor:'#333333',  
    alignItems:'center',    
    
  },

  clipboard:{
    marginTop:40,
    height: 56,
  },

  emptyListTitle:{       
    marginTop: 10,
    fontSize: 14,
    fontWeight:'bold',
    color: '#808080',
  },

  emptyListSubTitle:{
    fontSize: 14,
    color: '#808080'
  },  

  /* Lista renderizada*/
  containerNotes: {               
    flexDirection:'row',
    backgroundColor: '#262626',    
    margin: 5,
    alignItems:'center',    
    borderRadius: 10,
    padding: 10,
  },

  clickNote:{
    flex: 1,    
    flexDirection:'row',
    alignItems:'center',
  },

  NotesText:{         
    color: '#fff',
    padding: 7,        
    marginLeft: 5
  },
})
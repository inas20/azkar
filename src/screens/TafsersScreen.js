import * as React from 'react';
import { SafeAreaView } from 'react-native';
import {FlatList, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { TafsirCard } from '../components/tafsirCard';
import { FontType } from '../constants/fonts';

class TafsersScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        tafsers: this.props.route.params.tafsirs? this.props.route.params.tafsirs:[],
        verse: this.props.route.params.verse ?  this.props.route.params.verse: {}
    }
  }

  componentDidMount(){
    this.props.navigation.setOptions({
      headerTitleStyle: {fontSize: 20} 
    })
} 

  renderTafserCard =({item})=>{
      return(
          <TafsirCard tafserData={item}/>
      )
  }


  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <Text style={{fontFamily: FontType.arabic, fontSize:25, textAlign:'center', paddingHorizontal:7}}>&#xfd3f; {this.state.verse.text} &#xfd3e;</Text>
        {this.state.tafsers.length > 0 ? <FlatList
            data={this.state.tafsers}
            renderItem={this.renderTafserCard}
        />: <Text style={{fontFamily: FontType.arabic, fontSize:30, textAlign: 'center'}}>لا يوجد تفسيرات متاحة</Text>}
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => {
    return{
        chapterVeres : state.quran.veres,
  
  
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
       
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TafsersScreen);
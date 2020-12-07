import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import { getChapterVerses } from '../api/quranApi';
import { AyahComponent } from '../components/ayahComponent';

export default class QuranDisplayScreen extends React.Component {
  constructor(props) {
    super(props)
   this.state={
    chapter_number: this.props.route.params.chapter_number,
    ayat:[]
   }
  }

  componentDidMount(){
    getChapterVerses(this.state.chapter_number).then(quran=>{
      this.setState({ayat: quran})
    })
  }

  renderVerse=({item})=>{
    return(
      <AyahComponent ayah={item}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.ayat.length>0 &&<FlatList
          //style={{flexWrap:'wrap'}}
          data={this.state.ayat}
          renderItem={this.renderVerse}
          keyExtractor = { (item,index) => index.toString()}
          extraData= {this.state.ayat}
        />}
      </View>
    );
  }
}

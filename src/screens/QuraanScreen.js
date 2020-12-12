import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import { getChapters } from '../api/quranApi';
import { ChapterCard } from '../components/chapterCard';


export default class QuraanScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      chapters:[]
    }
  }

  componentDidMount(){
    getChapters().then(res=>{
      if(!!res.chapters && res.chapters.length>0){
        this.setState({chapters: res.chapters})
      }
    })
  }

  renderChapterCard=({item})=>{
    return(
      <ChapterCard chapter={item} openChapter={()=> this.props.navigation.navigate("Ayat",{chapter_number: item.chapter_number, title: item.name_complex})}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        
        {this.state.chapters.length>0 &&<FlatList
          data={this.state.chapters}
          renderItem={this.renderChapterCard}
          keyExtractor = { (item,index) => index.toString()}
          extraData= {this.state.chapters}
        />}
        {this.state.chapters.length==0 && <Text>القران!</Text>}
      </View>
    );
  }
}

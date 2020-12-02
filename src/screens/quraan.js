import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import { getCompleteQuraan } from '../api/quranApi';
import { ChapterCard } from '../components/chapterCard';


export default class QuraanScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      chapters:[]
    }
  }

  componentDidMount(){
    getCompleteQuraan().then(res=>{
      console.log('res---', res)
      if(!!res.chapters && res.chapters.length>0){
        this.setState({chapters: res.chapters})
      }
    })
  }

  renderChapterCard=({item})=>{
    return(
      <ChapterCard chapter={item}/>
    )
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>القران!</Text>
        {this.state.chapters.length>0 &&<FlatList
          data={this.state.chapters}
          renderItem={this.renderChapterCard}
          keyExtractor = { (item,index) => index.toString()}
          extraData= {this.state.chapters}
        />}
      </View>
    );
  }
}

import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { getChapters } from '../redux/actions/quranApi';
import { ChapterCard } from '../components/chapterCard';


class QuraanChaptersScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      chapters:[]
    }
  }

  componentDidMount(){
    this.props.onGetChapters().then(res=>{
      console.log("res---", res)
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

const mapStateToProps = (state) => {
  return{
      //qurchapters : state.todos.todos,

  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetChapters: () => dispatch(getChapters()),
     
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuraanChaptersScreen);

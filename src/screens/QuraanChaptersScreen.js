import * as React from 'react';
import {Text, View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { getChapters } from '../redux/actions/index';
import { ChapterCard } from '../components/chapterCard';
import { colors } from '../constants/colors';


class QuraanChaptersScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      chapters:[]
    }
  }

  componentDidMount(){
    this.props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity style={{padding: 15}} onPress={()=> this.props.navigation.navigate("Quran")}> 
          <Ionicons name="list" size={30} color={colors.white} />
        </TouchableOpacity>
      ),
    })
    
    this.props.onGetChapters().then(res=>{
      if(!!res.chapters && res.chapters.length>0){
        this.setState({chapters: this.props.chapters})
      }
    })
  }

  renderChapterCard=({item})=>{
    return(
      <ChapterCard 
        chapter={item} 
        openChapter={()=> this.props.navigation.navigate("Ayat",{
          chapter: item,
          title: item.name_arabic
        })}/>
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
        {this.state.chapters.length == 0 && <View>
            <Text style={{fontSize:25}}> تحميل سور القران الكريم</Text>
            <ActivityIndicator
              color= {colors.primary}
              style={{marginLeft: 8}} />
          </View>
          }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isLoading: state.ui.isLoading,
    chapters: state.quran.chapters
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetChapters: () => dispatch(getChapters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuraanChaptersScreen);

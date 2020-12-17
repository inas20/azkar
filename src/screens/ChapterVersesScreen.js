import * as React from 'react';
import { Text, View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import { getChapterVerses, getVerseTafsir } from '../redux/actions/index';
import { AyahComponent } from '../components/ayahComponent';
import { colors } from '../constants/colors';
import { connect } from 'react-redux';
import { FontType } from '../constants/fonts';

class ChapterVersesScreen extends React.Component {
  constructor(props) {
    super(props)
   this.state={
    chapter: this.props.route.params.chapter,
    ayat:[],
    offset:0,
    page:1,
    isScrolledMore :false,
    refreshing: false,
    tafsers:[],
   }
  }

  componentDidMount(){
    this.loadChapterVerses();
  }

  handleMoreVerses=()=>{
    this.setState({refreshing: true})
    if(this.state.isScrolledMore){
      this.setState(prevState=>{
        return {
          offset : prevState.offset +10,
          page :prevState.page +1
        }
      },()=>{
        //this.flatListRef?.scrollToOffset({ animated: false, offset: this.state.offset-1 })
        this.loadChapterVerses()
      } )
    }
  }

  loadChapterVerses =()=>{
    this.props.onGetChapterVeres(this.state.chapter.chapter_number, this.state.offset,this.state.page).then(quran=>{
      this.setState({refreshing: false})
      if(!!quran && quran.verses && quran.verses.length>0){
        this.setState(prevState=>{
          return{
            ayat : [...prevState.ayat, ...quran.verses]
          }
        })
      }
    })
  }

  getVerseTafsers =(ayah)=>{
    this.props.onGetVerseTafsir(this.state.chapter.chapter_number, ayah.verseNum).then((tafsirs)=>{
      this.props.navigation.navigate("Tafsers", {tafsirs: tafsirs, verse: ayah, title: "  تفسير اّية رقم " + ayah.verseNum + "من سورة " + this.state.chapter.name_arabic})
    })
  }


  renderVerse=({item})=>{
    return(
      <AyahComponent 
        ayah= {item}  
        navigation={this.props.navigation}
        getTafsers= {()=> this.getVerseTafsers(item)}
      />
    )
  }

   renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator
              color="white"
              style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };


  render() {
    return (
      <View style={{flex:1}}>
        {this.state.chapter.bismillah_pre && <Text style={styles.bismiallahStyle}>&#xfd3f; بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ &#xfd3e;</Text>}
        {this.state.ayat.length>0 ? <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          // refreshControl={
          //   <RefreshControl
          //       refreshing={this.state.refreshing}
          //       onRefresh={() => {
          //           //this.loadChapterVerses();
          //       }}
          //       tintColor={colors.primary}
          //   />
          // }
          refreshing={this.state.refreshing}
          data={this.state.ayat}
          renderItem={this.renderVerse}
          keyExtractor = { (item,index) => index.toString()}
          extraData= {this.state.ayat}
          onEndReachedThreshold={0.3}
          scrollsToTop={true}    
          style={{marginBottom:15}}
          onEndReached={()=> this.setState({isScrolledMore: true},()=> this.handleMoreVerses())}
        />: <View style={{justifyContent:'center'}}>
              <ActivityIndicator
                color= {colors.primary}
                style={{marginLeft: 8}} />
        </View> }
      </View>
    );
  }
}

const styles= StyleSheet.create({
  bismiallahStyle:{
    textAlign: 'center',
    paddingVertical: 10,
   // paddingRight: 10,
    fontSize: 30,
    fontFamily: FontType.arabic,
    lineHeight: 50,
    color: colors.primary
  }
})

const mapStateToProps = (state) => {
  return{
      chapterVeres : state.quran.veres,


  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetChapterVeres: (chapterNum, offset, page) => dispatch(getChapterVerses(chapterNum, offset, page)),
      onGetVerseTafsir:(chapterNum, verseNum) => dispatch(getVerseTafsir(chapterNum, verseNum))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterVersesScreen);
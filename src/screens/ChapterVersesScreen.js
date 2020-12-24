import * as React from 'react';
import { Text, View,ScrollView, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import { getChapterVerses, getVerseTafsir } from '../redux/actions/index';
import { AyahComponent } from '../components/ayahComponent';
import { VerseComponent } from '../components/verseComponent';

import { colors } from '../constants/colors';
import { connect } from 'react-redux';
import { FontType } from '../constants/fonts';
import { clearVerses } from '../redux/actions/quranApi';

class ChapterVersesScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      chapter: this.props.route.params.chapter,
      ayat:[] ,
      offset:0,
      page:1,
      isScrolledMore :false,
      refreshing: false,
      tafsers:[],
   }
   this.props.onClearVerses();
  }

  componentDidMount(){
    this.loadChapterVerses();
  }

  // handle more verses while scorlling by loading more verses from api
  handleMoreVerses =()=>{
    this.setState({refreshing: true})
    if(this.props.isPageChanged){
      if(this.state.isScrolledMore ){
        this.setState(prevState=>{
          return {
            offset : prevState.offset +10,
            page :prevState.page +1
          }
        },()=>{
          //this.flatListRef?.scrollToOffset({ animated: false, offset: this.state.offset-1 })
          this.loadChapterVerses()
        })
      }
    }
  }

  // get chapter Verses from api and set the state with response
  loadChapterVerses =()=>{
    this.props.onGetChapterVeres(this.state.chapter.chapter_number, this.state.offset,this.state.page).then(quran=>{
      this.setState({refreshing: false})
      if(!!quran && quran.verses && quran.verses.length>0){
        this.setState(prevState=>{
          return{
            ayat : [ ...this.props.chapterVerses]
          }
        })
      }
    })
  }

  // get tafers of verse when pressed
  getVerseTafsers =(ayah)=>{
    this.props.onGetVerseTafsir(this.state.chapter.chapter_number, ayah.verseNum).then((tafsirs)=>{
      this.props.navigation.navigate("Tafsers", {tafsirs: tafsirs, verse: ayah, title: "  تفسير اّية رقم " + ayah.verseNum + "من سورة " + this.state.chapter.name_arabic})
    })
  }


  renderQuranVerses =()=>{
    return this.state.ayat.map((item, index)=>{
      return(
        <VerseComponent
          key={index}
          ayah= {item}/>
      )
    })
  }


  // render each verse of chapter
  renderVerse =({item})=>{
    return(
      <AyahComponent 
        versesCount={this.state.chapter.verses_count}
        ayah= {item}  
        navigation={this.props.navigation}
        getTafsers= {()=> this.getVerseTafsers(item)}/>
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

  // render the end of the chapter after ending scrolling
  renderVersesEnd =()=>{
    if(this.props.isPageChanged){
      return (<ActivityIndicator
        color="white"
        style={{marginLeft: 8}} />)
    }else{
      return(
        <View style={{justifyContent:'center'}}>
          <Text style={{textAlign:'center', fontSize: 32,color: colors.primary}}>
            &#xfd3f;صٍـدَّقَْ اٌلِـلِـهٌ اٌلِـعٍَظَِيٌـمِـ &#xfd3e;
          </Text>
        </View>
      )
    }
  }




  render() {
    return (
      // <View style={{flex:1}}>
      //   {this.state.chapter.bismillah_pre && <Text style={styles.bismiallahStyle}>&#xfd3f; بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ &#xfd3e;</Text>}
        // <ScrollView style={{margin:15, flexGrow: 1}} contentContainerStyle={{flexWrap:'wrap-reverse',  flexGrow: 1,}}>
          <View style={{flexWrap:'wrap', flexDirection:'row', flexShrink:1}}>
            <Text style={{flexWrap:'wrap', padding:10,flex:1 }}>
              {
                 this.state.ayat.map((item, index)=>
                  (
                    <VerseComponent
                      key={index}
                      ayah= {item}/>
                  )
                )
              }
              {/* {this.renderQuranVerses()} */}
              </Text>
          </View>
        // </ScrollView>
        
      
        /* {this.state.ayat.length>0 ? <FlatList
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
          numOfColumns={4}
          contentContainerStyle={{margin:15,flexShrink:1}}
          style={{flexDirection:'row'}}
          ListFooterComponent ={this.renderVersesEnd}
          onEndReached={()=> this.setState({isScrolledMore: true},()=> this.handleMoreVerses())}
        />: <View style={{justifyContent:'center'}}>
              <ActivityIndicator
                color= {colors.primary}
                style={{marginLeft: 8}} />
        </View> } */
      // </View>
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
      chapterVerses : state.quran.verses,
      isPageChanged: state.quran.isPageChanged
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetChapterVeres: (chapterNum, offset, page) => dispatch(getChapterVerses(chapterNum, offset, page)),
      onGetVerseTafsir:(chapterNum, verseNum) => dispatch(getVerseTafsir(chapterNum, verseNum)),
      onClearVerses:() => dispatch(clearVerses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterVersesScreen);
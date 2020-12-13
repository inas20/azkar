import * as React from 'react';
import {RefreshControl, View, FlatList} from 'react-native';
import { getChapterVerses, getVerseTafsir } from '../redux/actions/quranApi';
import { AyahComponent } from '../components/ayahComponent';
import { colors } from '../constants/colors';

export default class QuranDisplayScreen extends React.Component {
  constructor(props) {
    super(props)
   this.state={
    chapter_number: this.props.route.params.chapter_number,
    ayat:[],
    offset:0,
    page:1,
    isScrolledMore :false,
    refreshing: false
   }
  }

  componentDidMount(){
    this.loadChapterVerses();
  }

  handleMoreVerses=()=>{
    console.log("isScrolledMore----", this.state.isScrolledMore)
    this.setState({refreshing: true})
    if(this.state.isScrolledMore){
      this.setState(prevState=>{
        return {
          offset : prevState.offset +10,
          page :prevState.page +1
        }
      }, this.loadChapterVerses())
    }
  }

  loadChapterVerses =()=>{
    getChapterVerses(this.state.chapter_number, this.state.offset,this.state.page).then(quran=>{
      this.setState({refreshing: false})
      if(!!quran && quran.length>0){
        this.setState({ayat: quran})
      }
    })
  }



  renderVerse=({item})=>{
    return(
      <AyahComponent ayah={item} getTafsir={()=> getVerseTafsir(this.state.chapter_number, item.verseNum)}/>
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
      <View style={{flex: 1, borderColor:colors.grey, borderStyle:'dotted',borderWidth:2}}>
        {this.state.ayat.length>0 && <FlatList
          refreshControl={
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.loadChapterVerses();
                }}
                tintColor={colors.primary}
            />
        }
          refreshing={this.state.refreshing}
          data={this.state.ayat}
          renderItem={this.renderVerse}
          keyExtractor = { (item,index) => index.toString()}
          extraData= {this.state.ayat}
          onEndReachedThreshold={0.3}
          scrollsToTop
          onEndReached={()=> this.setState({isScrolledMore: true},()=> this.handleMoreVerses())}
        />}
      </View>
    );
  }
}

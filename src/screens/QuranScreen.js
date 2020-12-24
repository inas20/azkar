import React from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';
 
import Pdf from 'react-native-pdf';



export default class QuranScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isScrolledMore: false,
            ayat: this.props.route.params.ayat ? this.props.route.params.ayat : [],
            //chapter: this.props.route.params.chapter ? this.props.route.params.chapter : {}
        }
    }


  // render each verse of chapter
  _renderVerse=({item})=>{
    return(
      <VerseComponent
        //versesCount={this.state.chapter?.verses_count}
        ayah= {item}  
        navigation={this.props.navigation}
        
      />
    )
  }

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
            <View style={styles.container}>
                  {this.state.ayat.length>0 && <FlatList
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
                    //refreshing={this.state.refreshing}
                    data={this.state.ayat}
                    renderItem={this._renderVerse}
                    keyExtractor = { (item,index) => index.toString()}
                    extraData= {this.state.ayat}
                    onEndReachedThreshold={0.3}
                    scrollsToTop={true}
                    numOfColumns={2}
                    contentContainerStyle={{margin:15,}}
                    style={{flexWrap:'wrap',}}
                    ListFooterComponent ={this.renderVersesEnd}
                    //onEndReached={()=> this.setState({isScrolledMore: true},()=> this.handleMoreVerses())}
                />}
            </View>
        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    }
});
import { config } from "../../constants/config";
import { GET_CHAPTER_VERSES, GET_QURAN_CHAPTERS } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";

const baseUrl = config.baseUrl;

export const getChapters = ()=>{
    return async(dispatch) =>{
        dispatch(uiStartLoading()); 
        try {
            const url = baseUrl;
            const req = await fetch(url)
            const chapters = await req.json()
            if(chapters && chapters.chapters.length >0){
                return dispatch(saveChapters(chapters.chapters));
            }
            dispatch(uiStopLoading()); 
           
        }catch(error){
            alert('حدث خطأ!!!!!', error)
            dispatch(uiStopLoading()); 
            return []
        }
    }
}

export const getChapterVerses = (chapterNum, offset , page)=>{
    return async(dispatch) =>{
        dispatch(uiStartLoading());
        try {
            const chunk =[]
            const url = baseUrl+chapterNum +'/verses?text_type=words&limit=10&offset='+offset +'&page=' +page;
            const request = await fetch(url)
            const verses = await request.json()
            if(verses.verses){
                if(verses.verses.length>0){

                    console.log("verses.verses--", verses.verses.length)
                    verses.verses.forEach(verse=>{
                        //console.log("verse--", verse)
                        chunk.push({
                            verseNum: verse.verse_number,
                            text: verse.text_madani,
                            sajdah: verse.sajdah,
                            juzNum: verse.juz_number,
                            code: verse.code,
                            covdeV3: verse.code_v3

                        })
                     })
                     dispatch(uiStopLoading()); 
                    return dispatch(saveVerses(chunk))
                }
            }
            dispatch(uiStopLoading()); 
            console.log("chunk--length--", chunk.length)
            return chunk;
        }catch(error){
            alert('حدث خطأ!!!!!', error)
            dispatch(uiStopLoading());
            return []
        }
    }
}

export const getVerseTafsir = (chapterNum, verseNum)=>{
    return async(dispatch) =>{
        try {
            dispatch(uiStartLoading());
            const url = baseUrl+ chapterNum +'/verses/'+ verseNum +'/tafsirs';
            const req = await fetch(url)
            const tafsirs = await req.json();
            let tafsers =[]
            if(tafsirs.tafsirs && tafsirs.tafsirs.length>0){
                //console.log('tafsirs--1-', tafsirs.tafsirs.length)
                tafsirs.tafsirs.forEach(tafsir=> {
                    //console.log('tafsirs---', tafsir)
                    tafsers.push({
                        resourceName: tafsir.resource_name,
                        tafsir: tafsir.text,
                        id:  tafsir.id.toString()
                    })
                })
              
            }
            //console.log('tafsirs--1-', tafsirs.tafsirs)
            dispatch(uiStopLoading());
            return tafsers;
        }catch(error){
            alert('حدث خطأ!!!!!'+ error)
            dispatch(uiStopLoading());
            return[];
        }
    }
}                                          

export const saveChapters =(chapters)=>{
    return {
        type :GET_QURAN_CHAPTERS,
        chapters: chapters
    }
}

export const saveVerses =(verses) =>{
    return {
        type :GET_CHAPTER_VERSES,
        verses: verses
    }
}
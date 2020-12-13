
export const getChapters = ()=>{
    return async(dispatch) =>{
        try {
            const url ='http://api.quran.com/api/v3/chapters';
            const req = await fetch(url)
            const chapters = await req.json()
            if(chapters && chapters.chapters.length >0){
                return dispatch(saveChapters(chapters.chapters));
            }
           
        }catch(error){
            alert('حدث خطأ!!!!!', error)
            return []
        }
    }
}

export const getChapterVerses = async(chapterNum, offset , page)=>{
    try {
            const chunk =[]
            const url = 'http://api.quran.com/api/v3/chapters/'+chapterNum +'/verses?text_type=words&limit=10&offset='+offset +'&page=' +page;
            const request = await fetch(url)
            const verses = await request.json()
            if(verses.verses){
                if(verses.verses.length>0){
                    console.log("verses.verses--", verses.verses.length)
                    verses.verses.forEach(verse=>{
                        chunk.push({
                            verseNum: verse.verse_number,
                            text: verse.text_madani
                        })
                     })
                }
            }
            console.log("chunk--length--", chunk.length)
            return chunk;
    }catch(error){
        alert('حدث خطأ!!!!!', error)
        return []
    }
}

export const getVerseTafsir = async(chapterNum, verseNum)=>{
    try {
        const url = 'http://api.quran.com/api/v3/chapters/'+ chapterNum +'/verses/'+ verseNum +'/tafsirs';
        const req = await fetch(url)
        const tafsirs = await req.json();
        let tafser =""
        if(tafsirs.tafsirs && tafsirs.tafsirs.length>0){
            //console.log('tafsirs--1-', tafsirs.tafsirs.length)
            let mysar = tafsirs.tafsirs.filter(tafsir=> tafsir.resource_name.includes("Arabic Qurtubi Tafseer"))
            if(mysar.length >0){
                tafser= mysar[0].text;
                //console.log("tafser-",tafser)
            } 
        }
        //console.log('tafsirs--1-', tafsirs.tafsirs)
        return tafser;
    }catch(error){
        alert('حدث خطأ!!!!!'+ error)
        return;
    }
}

export const saveChapters =(chapters)=>{
    return {
        type :'GET_QURAN_CHAPTERS',
        chapters: chapters
    }
}
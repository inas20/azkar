export const getChapters = async()=>{
    try {
            const url ='http://api.quran.com/api/v3/chapters';
            const req = await fetch(url)
            const chapters = await req.json()
            return chapters;
    }catch(error){
        alert('حدث خطأ!!!!!', error)
        return []
    }
}

export const getChapterVerses = async(chapterNum)=>{
    try {
            const chunk =[]
            const url = 'http://api.quran.com/api/v3/chapters/'+chapterNum +'/verses?text_type=words';
            const request = await fetch(url)
            const verses = await request.json()
            if(verses.verses){
                if(verses.verses.length>0){
                    verses.verses.forEach(verse=>{
                        chunk.push({
                            verseNum: verse.verse_number,
                            text: verse.text_madani
                        })
                     })
                }
            }
            return chunk;
    }catch(error){
        alert('حدث خطأ!!!!!', error)
        return []
    }
}
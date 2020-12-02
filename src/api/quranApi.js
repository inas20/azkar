export const getCompleteQuraan = async()=>{
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
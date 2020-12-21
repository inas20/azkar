import { SAVE_TIME_ZONE } from "./actionTypes";
import { uiStartLoading, uiStopLoading,  } from "./ui";

export const getPrayersTime =(latitude, longitude, timeStamp)=>{

    const url = `http://api.aladhan.com/v1/timings/${timeStamp}?latitude=${latitude}&longitude=${longitude}&method=2`;
    
    return async(dispatch) =>{
        dispatch(uiStartLoading());
        try {
            const request = await fetch(url);
            const result = await request.json();
            let dateAndTimes ={}
            if(result.data){
                if(result.data.date){
                    dateAndTimes ={...dateAndTimes, 
                        hijri: result.data.date.hijri
                    }
                    // dateAndTimes.push({
                    //     hijri: result.data.date.hijri
                    // })
                }
                if(result.data.timings){
                    dateAndTimes ={...dateAndTimes, 
                        timings: result.data.timings}
                    // dateAndTimes.push({
                    //     timings: result.data.timings
                    // })
                }
                if(result.data.meta){
                    dateAndTimes ={...dateAndTimes, 
                        timezone: result.data.meta.timezone
                    }
                    // dateAndTimes.push({
                    //     timezone: result.data.meta.timezone
                    // })
                }
                dispatch(saveTimeAndZone(dateAndTimes))
            }
          
            //console.log("result---", result)
            console.log("dateAndTimes----", dateAndTimes)
         
            return dateAndTimes;

        }catch(error){
            alert('حدث خطأ!!!!!'+ error)
            dispatch(uiStopLoading());
            return []
        }
    }
}

const saveTimeAndZone =(zoneTime) =>{
    return{
        type: SAVE_TIME_ZONE,
        zoneTime: zoneTime
    }
}
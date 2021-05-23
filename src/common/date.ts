
const countAllowedDaysBefore = 5;

export const getTodayTimestamp = () => {
    const currentDate = new Date();
    //currentDate.setHours(0, 0, 0, 0);
    return Math.floor(currentDate.getTime() / 1000);
}

export const getMinDateUTC = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return getTodayTimestampUTC() - countAllowedDaysBefore * 24 * 3600;
    // 00:00:00 for UTC...
}

const getTodayTimestampUTC = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return timestampToSecondFromMSecond((currentDate.getTime()  - currentDate.getTimezoneOffset() * 60000));
}

export const convertDateToTimestampForWeathermap = (dateIso: string, cityTimezoneOffset: number) => {


    const today = getTodayTimestampUTC();
    const date = new Date(dateIso);
    const timestamp = timestampToSecondFromMSecond(date.getTime()); // UTC 00:00  Samara 04:00 / Kazan 03:00


    if (today === timestamp ) {
        //is today
        return timestampToSecondFromMSecond(new Date().getTime()); //current
    } else {
        return timestamp - cityTimezoneOffset + 14 * 3600; // 14 : 00 - Local Time
    }
}



const timestampToSecondFromMSecond = (timestamp: number) => {
    return Math.floor( timestamp / 1000);
}

export const convertTimestampToIsoString = (date: number) => {
    return new Date(date * 1000).toISOString().split('T')[0];
}

export const getMinDate = () => (getTodayTimestamp() - countAllowedDaysBefore * 24 * 3600); // 5 days ago
export const getMaxDate = () => (getTodayTimestamp());

export const getMinIsoDate = () => convertTimestampToIsoString(getMinDate());
export const getMaxIsoDate = () => convertTimestampToIsoString(getMaxDate());

//1621540800 - 240 * 60

console.log(getMinDate());

export const detectValidDate = (dateIso: string) => {

    const today = new Date();
    const date = new Date(dateIso);
    const timestamp = timestampToSecondFromMSecond(date.getTime());
    return (timestamp >= getMinDateUTC() && timestamp <= timestampToSecondFromMSecond(today.getTime()));

}
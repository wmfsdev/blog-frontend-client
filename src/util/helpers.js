import { DateTime } from 'luxon'

export function createDateStamp(timestamp) {
    const date = DateTime.fromISO(timestamp)
    const humanReadable = date.toLocaleString(DateTime.DATE_MED);
    return humanReadable
}
  
export function strip(html){
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}
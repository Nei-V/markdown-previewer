import NEWTEXT from '../constants';

export const allText = (text) => dispatch => {
    console.log("text in action1 alltext : ",text);
    dispatch ({
        type: NEWTEXT,
        fullText: text
    })
}
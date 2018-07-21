import NEWTEXT from '../constants'

let a="blue";
const showText = (state = a,action) => {
    switch (action.type) {
        case NEWTEXT:
        console.log("new state");
        console.log("fullText after dispatch",action.fullText);
        return action.fullText;
        default:
        console.log("old state");
        return state;
    }
}
console.log("showText in reducer ",showText);
export default showText;
import {createUserInfo} from './data.js';


const getNewObjects = Array.from({length: 25}, createUserInfo,);

window.console.log(getNewObjects);


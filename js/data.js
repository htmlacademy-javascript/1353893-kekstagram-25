import {randomInteger, makeCountValue} from './utils.js';

const DESCRIPTION = [
  'Красивая фотография',
  'Красивый Египет',
  'Когда радости нет предела.',
  'Я не плачу — это просто дождь.',
  'Поймал дзен.',
  'Досадно, но ладно.'
];
const NAMES = ['Алексей', 'Паша', 'Владимир', 'Алиса', 'Ольга', 'Юлия', 'Олеся', 'Андрей'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Какая красивая фотография'];

const getRandomArrayElement = (elements) => elements[randomInteger(0, elements.length -1)];


const createComments = () => ({
  id: makeCountValue(25),
  avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});


export const createUserInfo = () => ({
  id: makeCountValue(25),
  description: getRandomArrayElement(DESCRIPTION),
  likes: randomInteger(15, 200),
  url: `photos/${makeCountValue(25)}.jpg`,
  comments: Array.from({length:6}, createComments),

}
);

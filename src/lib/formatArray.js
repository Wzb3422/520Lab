import randomInt from 'lodash/random.js'
const randomQuestions = function (min, max) {
  const randoms = [];
  while (true) {
    let isExists = false;
    let random = randomInt(min,max);
    for (let i = 0; i < randoms.length; i++) {
      if (random === randoms[i]) {
        isExists = true;
        break;
      }
    }
    if (!isExists)
      randoms.push(random);
    if (randoms.length === 5)
      break;
  }
  return randoms
};

export const OriginDataFormat = function (arr) {
  const List = new Set(randomQuestions(1, arr.data.length));
  const result = arr.data.filter(
    item => (List.has(item.id))
  );
  return AddIndex(result)
};

export const AddIndex = function (result) {
  let startIndex = 1;
  result.map(item => (item.index = startIndex++));
  return result.reverse()
};

import randomInt from 'lodash/random.js'
import intersection from 'lodash/intersection'

/*生成五个不重复的随机数组*/
const randomQuestions = function (min, max) {
  const randoms = [];
  while (true) {
    let isExists = false;
    let random = randomInt(min, max);
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

/*生成五道题*/
export const OriginDataFormat = function (arr) {
  const List = new Set(randomQuestions(1, arr.data.length));
  const result = arr.data.filter(
    item => (List.has(item.id))
  );
  return AddIndex(result)
};

/*数组加题目序号并反转*/
export const AddIndex = function (result) {
  let startIndex = 1;
  result.map(item => (item.index = startIndex++));
  return result.reverse()
};

/*传入题目数组，选择一个非五道题id内的题目的id*/
export const randomId = function (list) {
  let idArray = [];
  list.map(item => idArray.push(item.id));
  let id = null;
  while (true) {
    let num = randomInt(1, 42);
    if (intersection([num], idArray).length === 0) {
      id = num;
      break;
    }
  }
  return id
};

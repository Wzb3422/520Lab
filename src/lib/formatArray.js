const randomQuestions = function () {
  let randoms = [];
  while (true) {
    let isExists = false;
    let random = parseInt(1 + 42 * (Math.random()));
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

export const Li = function (arr) {
  let List = new Set(randomQuestions(arr.length));
  let result = arr.data.filter(
    item => (List.has(item.id))
  );
  let startIndex = 1;
  result.map(item => (item.index = startIndex++));

  return result.reverse()
};

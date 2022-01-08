const validateField = require("./validateField");
const setBomb = require("./setBomb");

function createMineField(fieldInfo) {
  // 원하는 폭탄의 개수가 게임판의 개수보다 많을 경우에 대한 처리
  validateField(fieldInfo);

  const { width, height, count } = fieldInfo;
  // 2차원 배열을 사용자에게 입력받은 숫자에 맞게 생성한다
  const field = [...Array(height)].map(() => Array(width).fill(null));

  // 폭탄을 2차원 배열에 랜덤하게 넣는다
  setBomb(field, count);

  // 폭탄이 아닌 자리들에 알맞는 숫자를 채워넣는다

  // 2차원 배열을 반환한다
  return field;
}

module.exports = createMineField;

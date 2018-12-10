const speedCoeff = 3;

const calculateExpression = e => eval(e.toString());

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateAnswers = expression => {
  const rightAnswer = calculateExpression(expression);
  const answers = Array.from({ length: 3 }).map(() => getRandomInt(0 - rightAnswer, rightAnswer + rightAnswer));
  const rightAnswerIndex = getRandomInt(0, 3);

  answers.splice(rightAnswerIndex, 0, rightAnswer);

  return { items: answers, rightAnswerIndex };
};

export const generateTask = level => {
  const l = Math.ceil(level / speedCoeff);
  const length = l + 2;
  const depthCoeff = l / 10;
  const maxNumber = 10 + 10 * l;

  const ExpressionNode = function(left, right, operator) {
    this.left = left;
    this.right = right;
    this.operator = operator;

    const isWithBrackets = Math.random() < depthCoeff;

    this.toString = function() {
      const clearExpression = left + ' ' + operator + ' ' + right;

      return isWithBrackets ? '(' + clearExpression + ')' : clearExpression;
    };
  };

  const operators = ['-', '-', '+', '+', '*'];

  const getRandomOperator = ({ isWithoutDivision } = {}) => {
    const index = getRandomInt(0, 5);
    return isWithoutDivision ? operators[index] : '/';
  };

  function buildExpressionTree(numNodes) {
    if (numNodes === 1) return getRandomInt(1, maxNumber);

    const numLeft = Math.floor(numNodes / 2);
    const leftSubTree = buildExpressionTree(numLeft);
    const numRight = Math.ceil(numNodes / 2);
    const rightSubTree = buildExpressionTree(numRight);

    const isWithoutDivision = calculateExpression(leftSubTree) % calculateExpression(rightSubTree) > 0;
    const operator = getRandomOperator({ isWithoutDivision });

    return new ExpressionNode(leftSubTree, rightSubTree, operator);
  }

  let expression = null;

  while (!expression || calculateExpression(expression) % 2 !== 0) {
    expression = buildExpressionTree(length);
  }

  return {
    question: expression.toString(),
    answers: generateAnswers(expression),
  };
};

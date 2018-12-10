export const calculateExpression = e => eval(e.toString());

export const generateTask = ({ depthCoeff, length, maxNumber }) => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

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

  const operators = ['*', '-', '+'];

  const getRandomOperator = ({ isWithoutDivision } = {}) => {
    const index = getRandomInt(0, 3);
    return isWithoutDivision ? operators[index] : '/';
  };

  function buildTree(numNodes) {
    if (numNodes === 1) return getRandomInt(1, maxNumber);

    const numLeft = Math.floor(numNodes / 2);
    const leftSubTree = buildTree(numLeft);
    const numRight = Math.ceil(numNodes / 2);
    const rightSubTree = buildTree(numRight);

    const isWithoutDivision = calculateExpression(leftSubTree) % calculateExpression(rightSubTree) > 0;
    const operator = getRandomOperator({ isWithoutDivision });

    return new ExpressionNode(leftSubTree, rightSubTree, operator);
  }

  let e = null;

  while (!e || calculateExpression(e) % 2 !== 0) {
    e = buildTree(length);
  }

  return e.toString();
};

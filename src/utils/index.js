const padLeft = time => {
  return (new Array(2).join('0') + time).slice(-2);
};

export const prettifyTime = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return `${padLeft(minutes)}:${padLeft(seconds)}`;
};

const playerFactory = (name, mark, score = 0) => {
  return { name, mark, score };
};

export { playerFactory };
const playerFactory = (name, mark, score) => { 
    score = 0
    return { name, mark, score };
};

export { playerFactory };
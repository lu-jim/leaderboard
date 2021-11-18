const clearBoard = () => {
  const board = document.getElementById('board');
  board.innerHTML = '';
};

export { clearBoard as default };
const table = document.querySelector("table");
const tableArray = [[], [], []];
let order = true;
const o = "O";
const x = "X";

const handleMark = e => {
  if (order) {
    e.path[0].innerText = o;
  } else {
    e.path[0].innerText = x;
  }
  order = !order;
};

const init = () => {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      tableArray[i][j] = document.querySelector(`.t${i + 1}-${j + 1}`);
    }
  }
  console.log(tableArray);
  table.addEventListener("click", handleMark);
};

init();

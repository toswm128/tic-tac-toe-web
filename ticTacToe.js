const table = document.querySelector("table");
const tableArray = [[], [], []];
let order = true;
const o = "O";
const x = "X";

const handleMark = e => {
  const target = e.path[0];
  if (order) {
    target.innerText = o;
  } else {
    target.innerText = x;
  }
  order = !order;
  markTable(target);
};

const markTable = target => {
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 2; j++) {
      if (tableArray[i][j].location === target.classList.value) {
        tableArray[i][j].chack = true;
        tableArray[i][j].order = order;
      }
    }
  }
  console.log(target.classList.value, tableArray);
};

const init = () => {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      tableArray[i][j] = {
        location: `t${i + 1}-${j + 1}`,
        chack: false,
        order: null,
      };
    }
  }
  console.log(tableArray);
  table.addEventListener("click", handleMark);
};

init();

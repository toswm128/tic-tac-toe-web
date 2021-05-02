const table = document.querySelector("table");
const tableArray = [[], [], []];
let order = true;
const o = "O";
const x = "X";

const orderMark = () => {
  if (order) {
    order = !order;
    return o;
  } else {
    order = !order;
    return x;
  }
};

const handleTable = e => {
  const target = e.path[0];
  markTable(target);
};

const markTable = target => {
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 2; j++) {
      if (tableArray[i][j].element === target) {
        const targetTable = tableArray[i][j];
        if (!targetTable.chack) {
          target.innerText = orderMark();
          targetTable.chack = true;
          targetTable.order = order;
          console.log(tableArray);
          return targetTable;
        }
      }
    }
  }
};

const init = () => {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      tableArray[i][j] = {
        element: document.querySelector(`.t${i + 1}-${j + 1}`),
        location: `t${i + 1}-${j + 1}`,
        chack: false,
        order: null,
      };
    }
  }
  console.log(tableArray);
  table.addEventListener("click", handleTable);
};

init();

const table = document.querySelector("table");
const tableArray = [[], [], []];
let order = false;
const o = "O";
const x = "X";

const orderMark = () => {
  let Mark;
  if (!order) {
    Mark = o;
  } else {
    Mark = x;
  }
  order = !order;
  return Mark;
};

const handleTable = e => {
  const target = e.path[0];
  markTable(target);
  isLine();
};

const markTable = target => {
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 2; j++) {
      if (tableArray[i][j].element === target) {
        const targetTable = tableArray[i][j];
        if (!targetTable.check) {
          target.innerText = orderMark();
          targetTable.check = true;
          targetTable.order = order;
          console.log(tableArray);
          return targetTable;
        }
      }
    }
  }
};

const isLine = () => {
  for (i = 0; i <= 2; i++) {
    for (j = 0; j <= 2; j++) {
      if (tableArray[i][j].check) {
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
        check: false,
        order: null,
      };
    }
  }
  console.log(tableArray);
  table.addEventListener("click", handleTable);
};

init();

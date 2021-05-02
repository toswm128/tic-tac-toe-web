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

const isLine = () => {
  for (i = 0; i <= 2; i++) {
    if (
      tableArray[0][0].order &&
      tableArray[1][0].order &&
      tableArray[2][0].order
    ) {
      console.log("A");
    }
    for (j = 0; j <= 2; j++) {
      console.log(tableArray[i][j].order);
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

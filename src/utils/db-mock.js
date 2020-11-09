import _ from "lodash";

// 数据结构设计
// {
//   id: String,
//   name: String,
//   description: String,
//   type: Object,
//   price: numbers;
//   quantity: numbers;
//   onSell: Boolean;
// }

const names = ["小饼干", "小饮料", "小果冻", "小面包", "小水果"];

const types = [
  {
    value: "cookie",
    label: "饼干",
  },
  {
    value: "drink",
    label: "饮料",
  },
  {
    value: "jelly",
    label: "果冻",
  },
  {
    value: "bread",
    label: "面包",
  },
  {
    value: "fruit",
    label: "水果",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function oneOf(array) {
  const index = getRandomInt(array.length - 1);
  return {
    value: array[index],
    index,
  };
}

export function generateDataset(count = 20) {
  const result = [];
  for (let i = 0; i < count; i++) {
    // mock 数据
    const id = (i + 1).toString();
    const { value, index } = oneOf(names);
    const name = `${value}${id}`;
    const type = types[index];
    const description = `这是一个小${type.label}`;
    const price = getRandomInt(50);
    const quantity = getRandomInt(100);
    const onSell = getRandomInt(10) >= 5;

    result.push({
      id,
      name,
      type,
      description,
      price,
      quantity,
      onSell,
    });
  }

  return result;
}

// TODO
export function pagination(arr, page, pageSize) {}

// mock 请求方法

// 定义params数据结构
// {
//   name: String,
//   type: String,
//   onSell: Boolean,
//   page: Number,
//   pageSize: Number,
// }

export async function getSnacks(data, params) {}
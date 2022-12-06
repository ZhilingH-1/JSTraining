/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//a. Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
let double_qp = (itemsObject) => {
  return itemsObject.map(({quantity,price}) => {
    return { quantity: quantity ** 2, price: price ** 2 };
  });
};
console.log("1a. ");
console.log(double_qp(itemsObject));

//b. Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
let filter_pq = (itemsObject) => {
  return itemsObject.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
};
console.log("1b. ");
console.log(filter_pq(itemsObject));

//c. Given the array, implement a function to calculate the total value of the items.

let reduce_pq = (itemsObject) => {
  return itemsObject.reduce((prev, currItem) => {
    return prev + currItem.price * currItem.quantity;
  }, 0);
};
console.log("1c. ");
console.log(reduce_pq(itemsObject));

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

let convert_string = (string) => {
  return string
    .replaceAll(/[^a-zA-Z]+/g, " ")
    .toLowerCase()
    .trim();
};
console.log("2. ");
console.log(convert_string(string) === expectedReturnString);

/*


Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

let merge_array = (first, second) => {
  let map = new Map();
  let result = [];
  first.forEach((ele) => {
    map.set(ele.uuid, { uuid: ele.uuid, role: null, name: ele.name });
  });
  second.forEach((ele_b) => {
    if (map.has(ele_b.uuid)) {
      let item = map.get(ele_b.uuid);
      item.role = ele_b.role;
      map.set(ele_b.uuid, item);
    } else {
      map.set(ele_b.uuid, { uuid: ele_b.uuid, role: ele_b.role, name: null });
    }
  });
  result = Array.from(map.values()); // take all map values become array
  result.sort((a, b) => a.uuid - b.uuid);
  return result;
};

let merge = (first, second) => {
  let dict = {};

  [...first, ...second].forEach((ele) => {
    if (dict[ele.uuid]) {
      let info = dict[ele.uuid];
      info.name = ele.name ? ele.name : null;
      info.role = ele.role ? ele.role : null;
    } else {
      dict[ele.uuid] = {
        uuid: ele.uuid,
        role: ele.role ? ele.role : null,
        name: ele.name ? ele.name : null,
      };
    }
  });
  return Object.values(dict)
};
console.log(merge(first,second))
console.log("3. ");
console.log(merge_array(first, second));




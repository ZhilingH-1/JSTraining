"use strict";

// create html element (element name ,id , className, test_content)
const createElement = (element, id, className, text_content) => {
  let new_element = document.createElement(element);
  new_element.id = id;
  new_element.className = className;
  new_element.textContent = text_content;
  return new_element;
};
// create list html element ex: parent: ol child:li  list: array
const createList = (list, parent, child ) =>{
  let parent_ele = createElement(parent,'','','')
  let child_ele = list.map(element =>{
    let child_ele = createElement(child,'','', element)
    return child_ele
  })
  parent_ele.append(...child_ele)
  return parent_ele
}
// create div container with displayed title : title_content and div id
const createContainerAndTitle = (title_content,id) =>{
  const new_div = createElement("div", id, "container", "");
  const title = createElement("h2", "", "", title_content);
  new_div.appendChild(title);
  return new_div
}
const body = document.body;
/*
Question 1
Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
let table_div = createContainerAndTitle('1. Table', 'table_div')
const table_title = tableInfo.tableHeader
const table_content = tableInfo.tableContent
const table = createElement('table', 'table','','')
const table_head = createElement('thead', '',"table_title",'')
const head_info = createList(table_title,'tr','th')
table_head.appendChild(head_info)
table.appendChild(table_head)
table_content.forEach(element =>{
  const list = Object.values(element)
  let content = createList(list,'tr','td')
  table.appendChild(content)
})
table_div.appendChild(table);


body.appendChild(table_div);

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];


const list_div = createContainerAndTitle('2. List','list_div')
const order_list = createList(list,'ol','li')
const unorder_list = createList(list, "ul", "li");
list_div.append(order_list,unorder_list)
body.appendChild(list_div)


/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];


const dropdown_div = createContainerAndTitle('3. DrowDown','dropdown_div')

const dropdown = createElement('select','citites','selector','')
const option_info = dropDownList.map(element =>{
  const option = createElement('option','','',element.content)
  option.value = element.value
  return option
})
dropdown.append(...option_info)
dropdown_div.appendChild(dropdown)
body.appendChild(dropdown_div)




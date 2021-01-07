// function makeList() {
//   let items = [];

//   return function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + ' added!');
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + ' removed!');
//       }
//     } else {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     }
//   };
// }

function makeList() {
  let items = [];

  return {
    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },
    list() {
      items.forEach(item => console.log(item));
    },
    remove(item) {
      let index = items.indexOf(item);
      items.splice(index, 1);
      console.log(`${item} removed!`);
    },
    clear() {
      items = [];
      console.log('All items removed!');
    },
  };
}

let list = makeList();
list.add('peas');
// = peas added!
list.list();
// = peas
list.add('corn');
// = corn added!
list.list();
// = peas
// = corn
list.remove('peas');
// = peas removed!
list.list();
// = corn
console.log(list.items);
list.clear();
list.list();
# Test Answers

1.	The main difference between const and let is that let can be reassigned and const can’t. You can change properties in an object that is defined using const, however, you cannot reassign it to a new object.
2.	For-of is usually used to loop through arrays or strings and for-in is used to iterate through object properties such as keys. For-in can also be used to retrieve indexes from the array or string.
3.	In order to check if an item exists in array I would use ES6 property “.includes()”. However, there are multiple ways to do it, such as looping through array and looking if an item is equal to green or using indexOf.

4.	
```
const truncWords = (arr, num) => {
  return arr.split(' ').slice(0, num);
} ;
```

5.	
```
const convertArrToObj = (arr) => {
  return arr.reduce((acc, item, index) => {
    const itemArr = item.split(' ');
    const isPencil = itemArr[1].split('_');
    if (isPencil[1] === 'pencil')
      acc.push({
        item: itemArr[1],
        code: itemArr[2],
        amount: itemArr[3]
      });
    return acc;
  }, [])
};

const formatInventory = (arr) => {
  const formatItems = convertArrToObj(arr);

  return {
    'Inventory': formatItems
  };

};
```
# Coding Challenge

## To run the application

1. Clone the repository

2. run ``` npm install ```

3. run ``` npm run start ```



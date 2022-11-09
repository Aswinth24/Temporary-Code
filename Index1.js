const _=require('lodash')

const items=[1,2,[3,4,[5,[12,2,3,4,[9,3,44,5]]]]]

const newItems=_.flattenDeep(items)
console.log(newItems)
// function quickSort(arr) {
//     if(arr.length< 1){
//         return arr
//     }
//     let pivot=arr[arr.length -1]
//     let left=[]
//     let right=[]

//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([29,3,-5,7,19,8,5]))


// function quickSort(arr) {
//     if(arr.length<1){
//         return []
//     }
//     let pivot = arr[0]
//     let left=[]
//     let right=[]

//     for (let i=1; i<arr.length;i++){
//         if(arr[i]< pivot){
//             left.push(arr[i])
//         }
//         else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat(pivot, quickSort(right))
// }
// console.log(quickSort([29,3,-5,7,19,8,5]))

function quickSort(arr) {
    if(arr.length<1){
        return arr
    }
    let pivot= arr[Math.floor((arr.length)/2)]
    let left=[]
    let right=[]

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]< pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}
console.log(quickSort([29,3,-5,7,19,8,5]))


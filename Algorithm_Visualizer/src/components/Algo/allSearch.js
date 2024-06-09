/************************************* Linear Search ***********************************/
export function linearSearch(arr,animations,target) {
    let n = arr.length;
    for(let i=0;i<n;i++){
        if(Number(arr[i]) === Number(target)){
            animations.push([i,'green']);
            break;
        }
        animations.push([i,'red']);
        animations.push([i,'turquoise']);
    }
}


/************************************* Binary Search ***********************************/
export function binarySearch(arr,animations,target){
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        animations.push([1,low, high]);
        animations.push([-1,low, high]);

        let mid = Math.floor((low + high) / 2);

        if (Number(arr[mid]) === Number(target)){
            animations.push([0,mid]);
            return;
        }
        else if (Number(arr[mid]) < Number(target))  low = mid + 1;
        else    high = mid - 1;

        animations.push([2,mid]);
        animations.push([-2,mid]);
    }
}
/**********************************************************  Merge Sort  *************************************************************/

function merge(low, mid, high,arr,animations){
    const left = arr.slice(low,mid+1), right = arr.slice(mid+1,high+1);
    let i = 0, j = 0,k = low;

    while(i < left.length && j < right.length){

      animations.push([1,low + i, mid+1+j]);    //change color from "turquoise" to "red"
      animations.push([-1,low + i, mid+1+j]);    //change color from "red" to "turquoise"

      if(Number(left[i].name) < Number(right[j].name)){       //array contain id and name
        animations.push([2,k,left[i]]);       //change color from "turquoise" to "Green"
        animations.push([-2,k,left[i]]);      // change color from "Green" to "turquoise"
        arr[k] = left[i];
        i++;
      }
      else{
        animations.push([2,k,right[j]]);
        animations.push([-2,k,right[j]]);
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    while(i < left.length){
      animations.push([1,low+i,low+i]);
      animations.push([-1,low+i,low+i]);
      animations.push([2,k,left[i]]);
      animations.push([-2,k,left[i]]);

      arr[k] = left[i];
      i++;
      k++;
    }
    while(j < right.length){
      animations.push([1,mid+1+j,mid+1+j]);
      animations.push([-1,mid+1+j,mid+1+j]);
      animations.push([2,k,right[j]]);
      animations.push([-2,k,right[j]]);

      arr[k] = right[j];
      j++;
      k++;
    }
}

export function mergeSort (low,high,arr,animations){
    if(low >= high)    return;
    
    const mid = Math.floor((low+high)/2);

    mergeSort(low,mid,arr,animations);
    mergeSort(mid+1,high,arr,animations);

    merge(low,mid,high,arr,animations);
}



/**********************************************************  Quick Sort  *************************************************************/

function partition(low, high, arr, animations) { 
	let pivot = Number(arr[high].name); 
	let i = low - 1; 

	for (let j = low; j <= high - 1; j++) { 

    animations.push([1,j,high]);
    animations.push([-1,j,high]);

		if (Number(arr[j].name) < pivot) { 
			i++; 

      animations.push([4, i, arr[j], j, arr[i]]);    //change the height of index i to arr[j].name and index i to arr[j].name
      animations.push([-4, i, arr[j], j, arr[i]]);    // -4 ("green" to "turquoise") and +4 ("turquoise" to "green")

			[arr[i], arr[j]] = [arr[j], arr[i]];  //swap
		} 
	} 

	// Swap pivot to its correct position 
  animations.push([4, i+1, arr[high], high, arr[i+1]]);
  animations.push([-4,i+1, arr[high], high, arr[i+1]]);

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
	return i + 1;
} 

export function quickSort(low, high,arr,animations) { 
	if (low >= high) return; 
	let pi = partition(low, high, arr, animations); 

	quickSort(low, pi - 1, arr, animations); 
	quickSort(pi + 1, high, arr, animations); 
} 



/**********************************************************  Selection Sort  *************************************************************/

export function selectionSort(arr,animations){
  let n = arr.length;
  for (let i = 0; i < n-1; i++){
      let min_idx = i;

      for (let j = i + 1; j < n; j++){
        animations.push([1, min_idx, j]);
        animations.push([-1, min_idx, j]);

        if (Number(arr[j].name) < Number(arr[min_idx].name)) min_idx = j;
      }

      animations.push([4, i, arr[min_idx], min_idx, arr[i]]);
      animations.push([-4, i, arr[min_idx], min_idx, arr[i]]);
      [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
  }
}


/**********************************************************  Bubble Sort  *************************************************************/

export function bubbleSort(arr,animations){
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < (n - i - 1); j++){

      animations.push([1,j,j+1]);
      animations.push([-1,j,j+1]);

      if (Number(arr[j].name) > Number(arr[j + 1].name)) {
        
        animations.push([4, j, arr[j+1], j+1, arr[j]]);
        animations.push([-4, j, arr[j+1], j+1, arr[j]]);

        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
}

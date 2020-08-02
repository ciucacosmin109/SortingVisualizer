import {SortResult} from './SortResult.js'

export class HeapSort {
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        HeapSort.heapSort(array, result);

        result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    } 
    static heapSort(arr, result)  {  
        let dim = arr.length;

        // Filter the array to make a heap
        for (let i = ~~(dim / 2 - 1); i >= 0; i--) 
            HeapSort.filter(arr, dim, i, result); 
      
        // Extract the elements from the heap 
        for (let i=dim-1; i>0; i--) {  
            [arr[0], arr[i]] = [arr[i], arr[0]]; // Extract the max element to the end 
             
            result.addSwapAnimation(0, i);

            HeapSort.filter(arr, i, 0, result); // Filter from the new root
        } 
    } 
    static filter(arr, size, pos, result) 
    { 
        let dim = size;
        
        let largest = pos; 
        let right = 2*pos + 2; 
        let left = 2*pos + 1;
        
        result.addCompareAnimation(right, largest); 
        if (right < dim && arr[right] > arr[largest]) 
            largest = right; 
      
        result.addCompareAnimation(left, largest); 
        if (left < dim && arr[left] > arr[largest]) 
            largest = left; 
       
        // Change and refilter
        if (largest !== pos)  { 
            [arr[pos], arr[largest]] = [arr[largest], arr[pos]];
 
            result.addSwapAnimation(pos, largest);

            HeapSort.filter(arr, size, largest, result); 
        } 
    } 
} 
// 1 0 3 6 3 7 9
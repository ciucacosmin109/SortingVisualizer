import {SortResult} from './SortResult.js'

export class QuickSort {
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        QuickSort.quickSort(array, 0, array.length - 1, result);

        result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    }
    static quickSort(arr, left, right, result) {
        if (left < right) {
            let pivotIndex = QuickSort.partition(arr, left, right, result);
             
            QuickSort.quickSort(arr, left, pivotIndex - 1, result); 
            QuickSort.quickSort(arr, pivotIndex, right, result); 
        }
    }
    static partition(arr, left, right, result) {
        let pivot = arr[~~((left + right) / 2)];

        while (left <= right) { 

            while (arr[left] < pivot) {
                // Animation
                result.addCompareAnimation(left, right);
                left++;
            }

            while (arr[right] > pivot) {
                // Animation
                result.addCompareAnimation(left, right);
                right--;
            }

            if (left <= right) {
                // Swap
                [arr[left], arr[right]] = [arr[right], arr[left]];

                // Animation 
                result.addSwapAnimation(left, right);

                left++;
                right--;
            }
        }
        return left;
    }
} 
// 6 7 9 8 9 
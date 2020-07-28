import { SortResult } from './SortResult.js';

export class MergeSortRecursive {
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();
         
        MergeSortRecursive.mergeSortRec(array, 0, array.length-1, result);
         
        result.addReplaceAnimation(0, array.length, array);
        result.sortedArray = array;
        return result;
    }
    static mergeSortRec(array, l, r, result) {
        if (l < r) {
            let m = ~~((r - l) / 2 + l);
            MergeSortRecursive.mergeSortRec(array, l, m, result);
            MergeSortRecursive.mergeSortRec(array, m + 1, r, result);

            MergeSortRecursive.merge(array, l, m, r, result); 
            //this.addAnimationsOld(array, result, l, m, r);
        }
    } 
    static merge(array, left, middle, right, result) { // In-place merge function
        let start1 = left;
        let start2 = middle + 1;
         
        if (array[middle] <= array[start2]) 
            return; 
         
        while (start1 <= middle && start2 <= right) {
            // Animations
            result.addCompareAnimation(start1, start2); 

            if (array[start1] > array[start2]) {
                let val = array[start2];
                let idx = start2;
                 
                while (idx !== start1) {
                    array[idx] = array[idx - 1];
                     
                    idx--;
                }
                array[idx] = val;

                // Animations 
                result.addReplaceAnimation(start1, start2, array.slice(start1, start2 + 1));
                 
                start1++;
                middle++;
                start2++;
            } else start1++;
        }
    } 
     
}
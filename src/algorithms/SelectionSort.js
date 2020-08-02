import { SortResult } from './SortResult.js';

export class SelectionSort {
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        for (let i = 0; i < array.length - 1; i++) {

            let minIdx = i;
            for (let j = i + 1; j < array.length; j++) { 
                // Add check
                result.addCompareAnimation(minIdx, j);

                if (array[j] < array[minIdx]) {
                    minIdx = j;
                }
            }
                
            let temp = array[minIdx];
            array[minIdx] = array[i];
            array[i] = temp;

            // Add movement 
            result.addSwapAnimation(minIdx, i);
        } 
        result.addReplaceAnimation(0, array.length, array);
        result.sortedArray = array;
        return result;
    }

}
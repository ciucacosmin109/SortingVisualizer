import { SortResult } from './SortResult.js';

export class BubbleSort {
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        let sorted = false; 
        for (let k = 0; k < array.length && !sorted; k++) {
            sorted = true;

            for (let i = 0; i < array.length - k - 1; i++) {
                // Register the check into the animation
                result.addCompareAnimation(i, i + 1);

                if (array[i] > array[i+1]) {
                    sorted = false;

                    // Swap the values
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;

                    // Register the swap into the animation  
                    result.addSwapAnimation(i, i + 1); 
                }
            }
        } 
        result.sortedArray = array; 
        return result;
    }
}
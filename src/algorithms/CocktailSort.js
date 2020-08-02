import { SortResult } from './SortResult.js';

export class CocktailSort {
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        let left = 0, right = array.length - 1; 

        let sorted = false;
        while (!sorted) {
            sorted = true;

            for (let i = left; i < right; i++) {
                // Compare Animation
                result.addCompareAnimation(i, i + 1);

                if (array[i] > array[i + 1]) {
                    sorted = false;

                    // Swap the values
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                     
                    // Swap animation 
                    result.addSwapAnimation(i, i + 1);
                }
            }
            if (sorted) break;
            right--;
            sorted = true;

            for (let i = right; i > left; i--) {
                // Compare Animation
                result.addCompareAnimation(i, i - 1);

                if (array[i] < array[i - 1]) {
                    sorted = false;

                    // Swap the values
                    let temp = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = temp;

                    // Swap animation 
                    result.addSwapAnimation(i, i - 1);
                }
            }
            left++;
        }

        result.addReplaceAnimation(0, array.length, array);
        result.sortedArray = array;
        return result;
    }
}
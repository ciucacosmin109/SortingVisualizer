﻿import { SortResult } from './SortResult.js';

export class InsertionSort {
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        for (let i = 1; i < array.length; i++) { 
            let current = array[i]; 
            // Register the check into the animations
            result.addCompareAnimation(i, i);

            let j = i - 1;
            while (j >= 0 && current < array[j]) { 
                array[j + 1] = array[j]; 
                 
                // Register the move into the animations  
                result.addSwapAnimation(j, j + 1);

                j--;
            }
            array[j + 1] = current;
        }
        
        result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array; 
        return result;
    }

}
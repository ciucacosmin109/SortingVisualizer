import React from 'react';
import { SortResult } from './factory/SortResult.js';

export class CocktailSort {
    static displayName = "Cocktail sort";

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

        //result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    }
    
    static getDescription(){
        return(<div>
            <b>Cocktail shaker sort</b>, also known as <b>bidirectional bubble sort, cocktail sort, shaker sort</b> 
            (which can also refer to a variant of <b>selection sort</b>), <b>ripple sort, shuffle sort, or shuttle 
            sort</b>, is an extension of <b>bubble sort</b>. The algorithm extends bubble sort by operating in two 
            directions. While it improves on bubble sort by more quickly moving items to the beginning of 
            the list, it provides only marginal performance improvements.<br/><br/>

            Like most variants of bubble sort, cocktail shaker sort is used primarily as an educational tool. 
            More performant algorithms such as timsort, or merge sort are used by the sorting libraries built 
            into popular programming languages such as Python and Java.<br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Cocktail_shaker_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    } 
    static getComplexity(){
        return "O(n^2)"; 
    }
}
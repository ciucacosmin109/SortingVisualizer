import React from 'react'; 
import { SortResult } from './factory/SortResult.js';

export class BubbleSort {
    static displayName = "Bubble sort";

    static sort(arrayToSort, modifyTheOriginal) {
        this.getDescription();
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        let sorted = false; 
        for (let k = 0; k < array.length && !sorted; k++) {
            sorted = true;

            for (let i = 0; i < array.length - k - 1; i++) {
                // Register the check into the animations
                result.addCompareAnimation(i, i + 1);

                if (array[i] > array[i+1]) {
                    sorted = false;

                    // Swap the values
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;

                    // Register the swap into the animations
                    result.addSwapAnimation(i, i + 1); 
                }
            }
        } 
        
        //result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array; 
        return result;
    }

    static getDescription(){
        return(<div>
            <em><b>Bubble sort</b></em>, sometimes referred to as <b>sinking sort</b>, is a simple 
            sorting algorithm that repeatedly steps through the list, compares adjacent elements and 
            swaps them if they are in the wrong order. The pass through the list is repeated until 
            the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller 
            or larger elements "bubble" to the top of the list.<br/><br/>

            This simple algorithm performs <b>poorly</b> in real world use and is used primarily as an educational 
            tool. More efficient algorithms such as timsort, or merge sort are used by the sorting 
            libraries built into popular programming languages such as Python and Java.<br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    } 
    static getComplexity(){
        return "O(n^2)"; 
    }
}
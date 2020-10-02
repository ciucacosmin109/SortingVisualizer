import React from 'react';
import { SortResult } from './factory/SortResult.js';

export class InsertionSort {
    static displayName = "Insertion sort";
    
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
        
        //result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array; 
        return result;
    }

    static getDescription(){
        return(<div>
            <b>Insertion sort</b> is a simple sorting algorithm that builds the final sorted 
            array (or list) one item at a time. It is much less efficient on large lists than 
            more advanced algorithms such as quicksort, heapsort, or merge sort. <br/><br/>

            However, insertion sort provides several advantages: 
            <ul>
                <li>Simple implementation: Jon Bentley shows a three-line C version, 
                    and a five-line optimized version</li>
                <li>Efficient for (quite) small data sets, much like other quadratic sorting algorithms</li>
                <li>More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms 
                    such as selection sort or bubble sort</li>
                <li>Adaptive, i.e., efficient for data sets that are already substantially sorted: 
                    the time complexity is O(kn) when each element in the input is no more than k 
                    places away from its sorted position</li>
                <li>Stable; i.e., does not change the relative order of elements with equal keys</li>
                <li>In-place; i.e., only requires a constant amount O(1) of additional memory space</li>
                <li>Online; i.e., can sort a list as it receives it</li>
            </ul><br/>
            
            When people manually sort cards in a bridge hand, most use a method that is similar 
            to insertion sort.<br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    } 
    static getComplexity(){
        return "O(n^2)"; 
    }
}
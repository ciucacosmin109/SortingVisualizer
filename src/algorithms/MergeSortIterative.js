import React from 'react';
import { SortResult } from './factory/SortResult.js';

export class MergeSortIterative {
    static displayName = "Merge sort (Iterative)";
    
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        MergeSortIterative.mergeSortIter(array, result); 

        //result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    } 
    static mergeSortIter(array, result) {
        let n = array.length;
        for (let size = 1; size < n; size = 2 * size) {
            for (let left = 0; left < n - 1; left = left + 2 * size) {
                let middle = Math.min(left + size - 1, n - 1);
                let right = Math.min(left + 2 * size - 1, n - 1);

                MergeSortIterative.merge(array, left, middle, right, result); 
            }

        }
    }
    static merge(array, left, middle, right, result) {
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

    static getDescription(){
        return(<div>
            In computer science, <b>merge sort</b> (also commonly spelled mergesort) 
            is an efficient, general-purpose, comparison-based sorting algorithm. 
            Most implementations produce a stable sort, which means that the 
            order of equal elements is the same in the input and output. <br/><br/>
            
            <b>Merge sort</b> is a divide and conquer algorithm that was invented by 
            <b> John von Neumann</b> in <b>1945</b>. A detailed description and analysis of 
            bottom-up mergesort appeared in a report by Goldstine and 
            von Neumann as early as 1948<br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    } 
    static getComplexity(){
        return "O(n*log(n))"; 
    }
}
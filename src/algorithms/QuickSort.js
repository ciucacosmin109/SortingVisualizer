import React from 'react';
import { SortResult } from './factory/SortResult.js';
import TimeComplexity from './factory/TimeComplexity';

export class QuickSort {
    static displayName = "Quick sort";
    
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        QuickSort.quickSort(array, 0, array.length - 1, result);

        //result.addReplaceAnimation(0, array.length - 1, array); 
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
    
    static getDescription(){
        return(<div>
            <b>Quicksort</b> (sometimes called partition-exchange sort) is an efficient sorting algorithm. 
            Developed by British computer scientist <b>Tony Hoare</b> in 1959 and published in 1961, 
            it is still a commonly used algorithm for sorting. When implemented well, it can be about 
            two or three times faster than its main competitors, merge sort and heapsort.<br/><br/>

            <b>Quicksort</b> is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from 
            the array and partitioning the other elements into two sub-arrays, according to whether 
            they are less than or greater than the pivot. The sub-arrays are then sorted recursively. 
            This can be done in-place, requiring small additional amounts 
            of memory to perform the sorting.<br/><br/>

            <b>Quicksort</b> is a comparison sort, meaning that it can sort items of any type for which a 
            "less-than" relation (formally, a total order) is defined. Efficient implementations of 
            Quicksort are not a stable sort, meaning that the relative order of equal sort items is 
            not preserved.<br/><br/>

            Mathematical analysis of quicksort shows that, on average, the algorithm takes <b>O(n log n)</b> 
            comparisons to sort n items. In the worst case, it makes O(n2) comparisons, though this 
            behavior is rare.<br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Quicksort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    }  
    static getTimeComplexity(){
        return new TimeComplexity("O(n*log(n))", "O(n*log(n))", "O(n^2)"); 
    } 
} 
// 6 7 9 8 9 
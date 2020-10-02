import React from 'react';
import { SortResult } from './factory/SortResult.js';

export class SelectionSort {
    static displayName = "Selection sort";
    
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
        
        //result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    }

    static getDescription(){
        return(<div>
            In computer science, <b>selection sort</b> is an in-place comparison sorting algorithm. 
            It has an <b>O(n2)</b> time complexity, which makes it inefficient on large lists,
            and generally performs worse than the similar insertion sort. <b>Selection sort</b> is 
            noted for its simplicity and has performance advantages over more complicated 
            algorithms in certain situations, particularly where auxiliary memory is limited.<br/><br/>

            The algorithm divides the input list into two parts: a sorted sublist of items which 
            is built up from left to right at the front (left) of the list and a sublist of the 
            remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist 
            is empty and the unsorted sublist is the entire input list. The algorithm proceeds by 
            finding the smallest (or largest, depending on sorting order) element in the unsorted 
            sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in 
            sorted order), and moving the sublist boundaries one element to the right.<br/><br/>

            The time efficiency of selection sort is quadratic, so there are a number of 
            sorting techniques which have better time complexity than selection sort. One 
            thing which distinguishes selection sort from other sorting algorithms is that 
            it makes the minimum possible number of swaps, n − 1 in the worst case.<br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Selection_sort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    } 
    static getComplexity(){
        return "O(n^2)"; 
    }
}
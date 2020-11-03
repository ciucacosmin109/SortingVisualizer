import React from 'react';
import { SortResult } from './factory/SortResult.js';
import TimeComplexity from './factory/TimeComplexity';

export class HeapSort {
    static displayName = "Heap sort";
    
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();

        HeapSort.heapSort(array, result);

        //result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    } 
    static heapSort(arr, result)  {  
        let dim = arr.length;

        // Filter the array to make a heap
        for (let i = ~~(dim / 2 - 1); i >= 0; i--) 
            HeapSort.filter(arr, dim, i, result); 
      
        // Extract the elements from the heap 
        for (let i=dim-1; i>0; i--) {  
            [arr[0], arr[i]] = [arr[i], arr[0]]; // Extract the max element to the end 
             
            result.addSwapAnimation(0, i);

            HeapSort.filter(arr, i, 0, result); // Filter from the new root
        } 
    } 
    static filter(arr, size, pos, result) 
    { 
        let dim = size;
        
        let largest = pos; 
        let right = 2*pos + 2; 
        let left = 2*pos + 1;
        
        result.addCompareAnimation(right, largest); 
        if (right < dim && arr[right] > arr[largest]) 
            largest = right; 
      
        result.addCompareAnimation(left, largest); 
        if (left < dim && arr[left] > arr[largest]) 
            largest = left; 
       
        // Change and refilter
        if (largest !== pos)  { 
            [arr[pos], arr[largest]] = [arr[largest], arr[pos]];
 
            result.addSwapAnimation(pos, largest);

            HeapSort.filter(arr, size, largest, result); 
        } 
    } 
    
    static getDescription(){
        return(<div>
            In computer science, <b>heapsort</b> is a comparison-based sorting algorithm. Heapsort can be thought of 
            as an improved selection sort: like selection sort, heapsort divides its input into a sorted and 
            an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest 
            element from it and inserting it into the sorted region. Unlike <b>selection sort</b>, heapsort does 
            not waste time with a linear-time scan of the unsorted region; rather, heap sort maintains 
            the unsorted region in a heap data structure to more quickly find the 
            largest element in each step.<br/><br/>

            Although somewhat slower in practice on most machines than a well-implemented quicksort, it
            has the advantage of a more favorable worst-case <b>O(n log n)</b> runtime. Heapsort is an in-place 
            algorithm, but it is not a stable sort.<br/><br/>

            <b>Heapsort</b> was invented by <b>J. W. J. Williams</b> in <b>1964</b>. This was also the birth of the heap, 
            presented already by Williams as a useful data structure in its own right. In the same year, 
            <b>R. W. Floyd</b> published an improved version that could sort an array in-place, continuing his 
            earlier research into the treesort algorithm.<br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Heapsort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    }  
    static getTimeComplexity(){
        return new TimeComplexity("O(n*log(n))", "O(n*log(n))", "O(n*log(n))"); 
    } 
} 
// 1 0 3 6 3 7 9
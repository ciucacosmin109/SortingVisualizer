import React from 'react';
import { SortResult } from './factory/SortResult.js';

export class ShellSort {
    static displayName = "Shell sort";
    
    static sort(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();
 
        for(let gap = ~~(array.length/2); gap>0; gap= ~~(gap/2)){

            for(let i = gap; i<array.length; i++){
                result.addCompareAnimation(i, i);
 
                let j = i - gap;
                while(j >= 0 && array[j] > array[j+gap]){
                    [array[j+gap] ,array[j]] = [array[j], array[j+gap]];
                    result.addCompareAnimation(j, j+gap);
                    result.addSwapAnimation(j, j+gap);
                    
                    j -= gap;
                } 
                
            }

        }
        
        //result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    }

    static sort_d(arrayToSort, modifyTheOriginal) {
        let array = modifyTheOriginal ? arrayToSort : [...arrayToSort];
        let result = new SortResult();
 
        for(let gap = ~~(array.length/2); gap>0; gap= ~~(gap/2)){

            for(let i = gap; i<array.length; i++){

                let elem = array[i];

                let j = i - gap;
                while(j >= 0 && array[j] > elem){
                    array[j+gap] = array[j]; 
                    j -= gap;
                }
                array[j+gap] = elem; 
                
            }

        }
        
        result.addReplaceAnimation(0, array.length - 1, array); 
        result.sortedArray = array;
        return result;
    }
 
    static getDescription(){
        return(<div>
            <b>Shellsort</b> is an optimization of insertion sort that allows 
            the exchange of items that are far apart. Shellsort, also known as Shell sort 
            or Shell's method, is an in-place comparison sort. It can be seen as either 
            a generalization of sorting by exchange (bubble sort) or sorting by 
            insertion (insertion sort). <br/><br/>
            
            The method starts by sorting pairs of elements 
            far apart from each other, then progressively reducing the gap between elements 
            to be compared. By starting with far apart elements, it can move some 
            out-of-place elements into position faster than a simple nearest neighbor 
            exchange. Donald Shell published the first version of this sort in 1959.
            The running time of Shellsort is heavily dependent on the gap sequence it uses. 
            For many practical variants, determining their time complexity remains an open problem. 
            <br/><br/>

            More info on <a href="https://en.wikipedia.org/wiki/Shellsort" target="_blank" rel="noopener noreferrer">Wikipedia</a><br/>
        </div>); 
    } 
    static getComplexity(){
        return "O(n*log^2(n)) <-> O(n^2)"; 
    }
}
import { SortResult } from './SortResult.js';

export class ShellSort {
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
        
        result.addReplaceAnimation(0, array.length - 1, array); 
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

}
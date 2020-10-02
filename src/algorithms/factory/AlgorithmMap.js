import { BubbleSort } from '../BubbleSort.js';
import { InsertionSort } from '../InsertionSort.js';
import { SelectionSort } from '../SelectionSort.js';
import { MergeSortRecursive } from '../MergeSortRecursive.js';
import { MergeSortIterative } from '../MergeSortIterative.js';
import { CocktailSort } from '../CocktailSort.js';
import { QuickSort } from '../QuickSort.js';
import { HeapSort } from '../HeapSort';
import { ShellSort } from '../ShellSort';

export const AlgorithmMap /*: { [key: string]: typeof SortAlgorithm }*/ = { 
    [BubbleSort.displayName] : BubbleSort,
    [CocktailSort.displayName] : CocktailSort,
    [HeapSort.displayName] : HeapSort,
    [InsertionSort.displayName] : InsertionSort,
    [MergeSortIterative.displayName] : MergeSortIterative,
    [MergeSortRecursive.displayName] : MergeSortRecursive,
    [QuickSort.displayName] : QuickSort,
    [SelectionSort.displayName] : SelectionSort,
    [ShellSort.displayName] : ShellSort,
};
 
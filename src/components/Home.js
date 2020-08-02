import React, { Component } from 'react';

import './Home.css';
 
import { SortResult } from '../algorithms/SortResult.js'; 
import { BubbleSort } from '../algorithms/BubbleSort.js';
import { InsertionSort } from '../algorithms/InsertionSort.js';
import { SelectionSort } from '../algorithms/SelectionSort.js';
import { MergeSortRecursive } from '../algorithms/MergeSortRecursive.js';
import { MergeSortIterative } from '../algorithms/MergeSortIterative.js';
import { CocktailSort } from '../algorithms/CocktailSort.js';
import { QuickSort } from '../algorithms/QuickSort.js';
import { HeapSort } from '../algorithms/HeapSort';


const INITIAL_ARRAY_SIZE = 100;
const MAX_ARRAY_ELEMENT = 300;
const ALLOWED_DELAYS = [1000, 300, 100, 40, 10, 1];

const INITIAL_COLOR = "darkgray";
const SORTED_COLOR = "green";
const COMPARE_COLOR = "red";
const REPLACE_COLOR = "violet";
 

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.state = {
            /*resolution: {
                width: window.innerWidth,
                height: window.innerHeight
            },*/
            algorithmId: 7, // Used by the algo combo-box
            array: [], // The current array

            playing: false, // Used by the Plaay/Pause button
            delay: 1, // Used by the speed slider = [1,100]

            update: true // To trigger the render method when not using this.setState(...);
        };

        this.animState = {
            loop: null, // The timer for the steps: used by the speedslider when changing the speed
            loopFunction: null, // The function that will be called at each step by the 'loop'

            currentStep: 0, // To be able to go to the next step
            numberOfSteps: 0, // The totla number of steps

            toUncolor: [] // The elements that need to be uncolored
        };
         
        this.config = {
            arraySize : INITIAL_ARRAY_SIZE
        };
    } 
    componentDidMount() { this.generateNewArray(); } // Generate a new array everytime the user opens up the sorting page
    componentWillUnmount() { this.stopSortAnimation(); } // Stop the animation if the user goes to another page

    generateNewArray() {
        this.stopSortAnimation();

        let randomNumber = (a, b) => {
            return Math.floor(Math.random() * (b - a) + a);
        }

        let arr = [];
        for (let i = 0; i < this.config.arraySize; i++) {
            arr.push(randomNumber(1, MAX_ARRAY_ELEMENT));
        }
        this.setState({ array: arr }); 

        this.paintArray(INITIAL_COLOR);
    }
    
    paintArray(color) {
        for (let i = 0; i < this.state.array.length; i++) {
            let elem = document.getElementById("vertical-bar-" + i);
            elem.style.backgroundColor = color;
        }
    }
    paintArrayIndex(color, index) {
        if (index < this.state.array.length && index >= 0) {
            let elem = document.getElementById("vertical-bar-" + index);
            elem.style.backgroundColor = color;
        }
    }

    playAnimations(animations) {
        if (animations.length === 0) {
            this.instantSort();
            return;
        }
        this.animState.currentStep = 0;
        this.animState.numberOfSteps = animations.length;
        this.animState.toUncolor = [];
        this.paintArray(INITIAL_COLOR)

        this.animState.loopFunction = () => {
            let i = this.animState.currentStep;

            // End the loop
            if (i >= this.animState.numberOfSteps) {
                clearInterval(this.animState.loop);
                this.paintArray(SORTED_COLOR);

                this.animState.currentStep = 0;
                this.setState({ playing: false });
                return;
            }

            // Play the animation
            if (SortResult.isEmptyAnimation(animations[i])) {
                // Uncolor the last colored elements
                while (this.animState.toUncolor.length > 0) {
                    this.paintArrayIndex(INITIAL_COLOR, this.animState.toUncolor.pop());
                }
            } else if (SortResult.isCompareAnimation(animations[i])) { 
                // Uncolor the last colored elements
                while (this.animState.toUncolor.length > 0) {
                    this.paintArrayIndex(INITIAL_COLOR, this.animState.toUncolor.pop());
                }

                this.paintArrayIndex(COMPARE_COLOR, animations[i].i);
                this.paintArrayIndex(COMPARE_COLOR, animations[i].j);

                // Store indices to uncolor
                this.animState.toUncolor.push(animations[i].i, animations[i].j);

            } else if (SortResult.isSwapAnimation(animations[i])) {
                // Uncolor the last colored elements
                while (this.animState.toUncolor.length > 0) {
                    this.paintArrayIndex(INITIAL_COLOR, this.animState.toUncolor.pop());
                }

                this.paintArrayIndex(COMPARE_COLOR, animations[i].i);
                this.paintArrayIndex(COMPARE_COLOR, animations[i].j);
                
                let a = animations[i].i;
                let b = animations[i].j;

                let temp = this.state.array[a];
                // eslint-disable-next-line
                this.state.array[a] = this.state.array[b];
                // eslint-disable-next-line
                this.state.array[b] = temp;

                this.setState({ update: true });

                // Store indices to uncolor
                this.animState.toUncolor.push(animations[i].i, animations[i].j);

            } else if (SortResult.isReplaceAnimation(animations[i])) {
                // Uncolor the last colored elements
                while (this.animState.toUncolor.length > 0) {
                    this.paintArrayIndex(INITIAL_COLOR, this.animState.toUncolor.pop());
                }

                for (let k = animations[i].i; k <= animations[i].j; k++) {
                    this.paintArrayIndex(REPLACE_COLOR, k);
                    
                    // Store indices to uncolor
                    this.animState.toUncolor.push(k); 

                    // eslint-disable-next-line
                    this.state.array[k] = animations[i].subArrayToReplace[k - animations[i].i];
                }
                this.setState({ update: true });

            }

            // Update the current step
            this.animState.currentStep++;
        };
        this.animState.loop = setInterval(this.animState.loopFunction, this.state.delay);

    }

    getSortResult(modifyTheOriginal = false) { // returns a SortResult object based on selected algorithm
        let sortResult;
        switch (this.state.algorithmId) {
            case 1:
                sortResult = BubbleSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 2:
                sortResult = InsertionSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 3:
                sortResult = SelectionSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 4:
                sortResult = MergeSortRecursive.sort(this.state.array, modifyTheOriginal);
                break;
            case 5:
                sortResult = MergeSortIterative.sort(this.state.array, modifyTheOriginal);
                break;
            case 6:
                sortResult = CocktailSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 7:
                sortResult = QuickSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 8:
                sortResult = HeapSort.sort(this.state.array, modifyTheOriginal);
                break;
            default:
                break;
        }
        console.log(sortResult);

        return sortResult;
    }
    instantSort() { 
        console.log("Instant sort ...");
        this.stopSortAnimation();

        // Sorts the array
        this.getSortResult(true);
        this.setState({ update: true });

        for (let i = 0; i < this.state.array.length; i++) {
            let elem = document.getElementById("vertical-bar-" + i);
            elem.style.backgroundColor = SORTED_COLOR;
        }
    }

    startSortAnimation() {
        if (this.animState.currentStep !== 0)
            return; 

        this.stopSortAnimation();
        this.setState({ playing: true });

        let sortResult = this.getSortResult();  
        if (typeof sortResult === 'undefined') { 
            this.setState({ playing: false });
            return; 
        }

        this.playAnimations(sortResult.animations);
    }
    resumeSortAnimation() {
        this.setState({ playing: true });
        this.animState.loop = setInterval(this.animState.loopFunction, this.state.delay); 
    }
    pauseSortAnimation() {
        clearInterval(this.animState.loop); 
        this.setState({ playing: false });
    }
    stopSortAnimation() {
        clearInterval(this.animState.loop);
        this.animState.currentStep = 0; 
        this.paintArray(INITIAL_COLOR);

        this.setState({ playing: false });
    }
     
    playNext() { this.animState.loopFunction(); }

    onAlgorithmChange = (event) => {
        let newId = parseInt(event.target.value);
        this.setState({ algorithmId: newId });
    }
    onSpeedChange = (event) => {
        this.pauseSortAnimation();
        let v = parseInt(event.target.value);
        this.setState({ delay: ALLOWED_DELAYS[v - 1] }/*, () => this.startSortAnimation()*/);
    }
    onArraySizeChange = (event) => {
        //this.pauseSortAnimation();
        let v = parseInt(event.target.value);
        this.config.arraySize = v;
        this.setState({ update: true });
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="form-inline">
                            <label htmlFor="selectAlgoDropDown"><h6>Algorithm</h6></label>
                            <select className="btn btn-sm combo-box" id="selectAlgoDropDown"
                                onChange={this.onAlgorithmChange} value={this.state.algorithmId}>
                                <option value={1}>Bubble sort</option>
                                <option value={2}>Insertion sort</option>
                                <option value={3}>Selection sort</option>
                                <option value={4}>Merge sort (recursive)</option>
                                <option value={5}>Merge sort (iterative)</option>
                                <option value={6}>Cocktail sort</option>
                                <option value={7}>Quick sort</option>
                                <option value={8}>Heap sort</option>
                            </select>

                        </div>
                    </div>

                    <div className="card-header">
                        <button className="btn btn-primary btn-sm"
                            onClick={() => this.generateNewArray()}>New array</button>
                        <button className="btn btn-success btn-sm"
                            onClick={() => this.instantSort()}>Instant sort</button>
                        
                        <div className="range-input form-inline">
                            <label htmlFor="sizeRangeSlider">Array's size: {this.config.arraySize}</label>
                            <input type="range" className="slider" id="sizeRangeSlider"
                                min="10" max="500" value={this.config.arraySize} 
                                onChange={this.onArraySizeChange} />
                        </div> 
                    </div>
                     
                    <div className="card-body"> 
                        <button
                            onClick={!this.state.playing && this.animState.currentStep === 0
                                ? () => this.startSortAnimation()
                                : (!this.state.playing
                                    ? () => this.resumeSortAnimation()
                                    : () => this.pauseSortAnimation())}
                            className={"btn btn-sm " + (!this.state.playing && this.animState.currentStep === 0
                                ? "btn-success"
                                : "btn-warning")}>

                            {!this.state.playing && this.animState.currentStep === 0
                                ? " > Play"
                                : (!this.state.playing ? " > Resume" : " | | Pause")}
                        </button>
                        <button onClick={() => this.stopSortAnimation()} className="btn btn-danger btn-sm">Stop</button>

                        <button onClick={!this.state.playing && this.animState.currentStep !== 0 ? () => this.playNext() : () => null}
                            disabled={this.state.playing || this.animState.currentStep === 0}
                            className="btn btn-sm btn-warning">
                            {" > Next"}
                        </button>

                        <div className="range-input form-inline">
                            <label htmlFor="speedRangeSlider">Speed: {ALLOWED_DELAYS.indexOf(this.state.delay) + 1}x</label>
                            <input type="range" className="slider" id="speedRangeSlider"
                                min="1" max={ALLOWED_DELAYS.length}
                                value={ALLOWED_DELAYS.indexOf(this.state.delay) + 1} 
                                onChange={this.onSpeedChange} />
                        </div> 
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h6>View</h6>
                    </div>

                    <div className="card-body render-zone">
                        {
                            this.state.array.map((number, index) =>
                                <div key={index} id={"vertical-bar-" + index} style={{
                                    height: number,
                                    marginTop: Math.max(...this.state.array) - number
                                }} className="vertical-bar"></div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

}

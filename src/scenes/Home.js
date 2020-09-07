import React, { Component } from 'react';
import { SoundPlayer } from '../utils/SoundPlayer'
import { VerticalBarsRenderer, SORTED_COLOR } from '../renderers/VerticalBarsRenderer';

import './Home.css';
 
//import { SortResult } from '../algorithms/SortResult.js'; 
import { BubbleSort } from '../algorithms/BubbleSort.js';
import { InsertionSort } from '../algorithms/InsertionSort.js';
import { SelectionSort } from '../algorithms/SelectionSort.js';
import { MergeSortRecursive } from '../algorithms/MergeSortRecursive.js';
import { MergeSortIterative } from '../algorithms/MergeSortIterative.js';
import { CocktailSort } from '../algorithms/CocktailSort.js';
import { QuickSort } from '../algorithms/QuickSort.js';
import { HeapSort } from '../algorithms/HeapSort';
import { ShellSort } from '../algorithms/ShellSort';
 
const INITIAL_ARRAY_SIZE = 100;
const MAX_ARRAY_ELEMENT = 300;
const ALLOWED_DELAYS = [1000, 300, 100, 40, 15, 1];
 
export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.state = { 
            array: [], // The current array  
 
            algorithmId: 7, // Used by the algo combo-box
            arraySize : INITIAL_ARRAY_SIZE, // Used by the array size slider 10-500

            playing: false,
            delay: 1, // Used by the speed slider = [1,100]
            soundEnabled: true // Used by the checkbox 
        };
 
        this.renderer = new VerticalBarsRenderer();
        this.sound = new SoundPlayer();
    } 
    componentDidMount() { this.generateNewArray(); }   
    componentWillUnmount() { this.stopSortAnimation(); }  
 
    generateNewArray() { 
        let randomNumber = (a, b) => {
            return Math.floor(Math.random() * (b - a) + a);
        }

        let arr = [];
        for (let i = 0; i < this.state.arraySize; i++) {
            arr.push(randomNumber(1, MAX_ARRAY_ELEMENT));
        }
        this.setState({ array: arr },()=>{ 
            if(this.renderer !== null){ 
                this.renderer.setArray(this.state.array);
            }
        });  
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
                sortResult = QuickSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 7:
                sortResult = HeapSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 8:
                sortResult = ShellSort.sort(this.state.array, modifyTheOriginal);
                break;
            case 9:
                sortResult = CocktailSort.sort(this.state.array, modifyTheOriginal);
                break;
            default:
                break;
        }
        console.log(sortResult); 

        return sortResult;
    }
    instantSort() {  
        this.stopSortAnimation();

        // Sorts the array
        this.getSortResult(true);  
        this.renderer.paintArray(SORTED_COLOR);
    }

    // Methods for controling the renderer and the sound player
    startSortAnimation() { 
        // Get the animations 
        let sortResult = this.getSortResult();  
        if (typeof sortResult === 'undefined') {  
            return; 
        } 
        if (sortResult.animations.length === 0) {
            this.instantSort();
            return;
        }

        this.renderer.start(sortResult.animations, this.state.delay);
        this.setState({playing: true});

        // Start the sound oscillator  
        this.sound.initSoundService();  
    }
    resumeSortAnimation() {
        this.renderer.resume(this.state.delay);
        this.setState({playing: true});

        // Start the sound oscillator  
        this.sound.initSoundService(); 
    }
    pauseSortAnimation() { 
        this.renderer.pause();
        this.setState({playing: false});

        // Stop the sound oscillator
        this.sound.deleteSoundService();  
    }
    stopSortAnimation() {
        this.renderer.stop();
        this.setState({playing: false});

        // Stop the sound oscillator
        this.sound.deleteSoundService();  
    } 
    playNext() { this.renderer.next(); }

    updateSound(a, b){ 
        if(this.state.soundEnabled) 
            this.sound.setOscillatorFrequency((a+b)/2, MAX_ARRAY_ELEMENT);
        else 
            this.sound.clearOscillatorFrequency(); 
    }

    // Controls handlers
    onAlgorithmChange = (event) => {
        let newId = parseInt(event.target.value);
        this.setState({ algorithmId: newId });
    }
    onSpeedChange = (event) => {
        let resume = this.renderer.isPlaying();
        let v = parseInt(event.target.value);

        this.renderer.pause(); 
        this.setState({playing: false});
         
        this.setState({ delay: ALLOWED_DELAYS[v - 1] }, () => {
            if(resume === true){
                this.renderer.resume(this.state.delay);
                this.setState({playing: true});
            }
        });
    }
    onArraySizeChange = (event) => { 
        let v = parseInt(event.target.value); 
        this.setState({ arraySize: v });
    } 
    onPlayButtonClick(){ 
        if(!this.renderer.isPlaying() && this.renderer.getCurrentStep() === 0)
            this.startSortAnimation();
        else if(!this.renderer.isPlaying())
            this.resumeSortAnimation();
        else 
            this.pauseSortAnimation();
    }

    // Render method
    render() {  
        return (
            <div className="home">
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
                                <option value={6}>Quick sort</option>
                                <option value={7}>Heap sort</option>
                                <option value={8}>Shell sort</option>
                                <option value={-1} disabled> </option>
                                <option value={9}>Cocktail sort</option>
                            </select>

                        </div>
                    </div>

                    { this.renderer != null ? <>
                        <div className="card-header">
                            <button className="btn btn-primary btn-sm"
                                onClick={() => {
                                    this.stopSortAnimation();
                                    this.generateNewArray();
                                }}>New array</button>

                            <button className="btn btn-success btn-sm"
                                onClick={() => this.instantSort()}>Instant sort</button>
                            
                            <div className="range-input form-inline div-right">
                                <label htmlFor="sizeRangeSlider">Array's size: {this.state.arraySize}</label>
                                <input type="range" className="slider" id="sizeRangeSlider"
                                    min="10" max="500" value={this.state.arraySize} 
                                    onChange={this.onArraySizeChange} />
                            </div> 
                        </div>
                    
                        <div className="card-body"> 
                            <button
                                onClick={() => this.onPlayButtonClick()}
                                className={"btn btn-sm " + (!this.state.playing && this.renderer.getCurrentStep() === 0
                                    ? "btn-success"
                                    : "btn-warning")}>

                                {!this.state.playing && this.renderer.getCurrentStep() === 0
                                    ? " > Play"
                                    : (!this.state.playing ? " > Resume" : " | | Pause")}
                            </button>
                            <button onClick={() => this.stopSortAnimation()} className="btn btn-danger btn-sm">Stop</button>

                            <button onClick={!this.state.playing && this.renderer.getCurrentStep() !== 0 ? () => this.playNext() : () => null}
                                disabled={this.state.playing || this.renderer.getCurrentStep() === 0}
                                className="btn btn-sm btn-warning">
                                {" > Next"}
                            </button>

                            <div className="range-input form-inline div-right">
                                <label htmlFor="speedRangeSlider">Speed: {ALLOWED_DELAYS.indexOf(this.state.delay) + 1}x</label>
                                <input type="range" className="slider" id="speedRangeSlider"
                                    min="1" max={ALLOWED_DELAYS.length}
                                    value={ALLOWED_DELAYS.indexOf(this.state.delay) + 1} 
                                    onChange={this.onSpeedChange} />
                            </div> 
                        </div></>
                        : null
                    }
                </div>

                <div className="card">
                    <div className="card-header">
                        <h6>View</h6>
 
                        <div className="form-check div-right">
                            <input type="checkbox" className="form-check-input" id="soundCheck"
                                checked={this.state.soundEnabled}
                                onChange={()=> this.setState({ soundEnabled: !this.state.soundEnabled })}/>
                            <label className="form-check-label" htmlFor="soundCheck">Sound</label>
                        </div>
                    </div>

                    <div className="card-body render-zone"> 
                        <VerticalBarsRenderer 
                            ref={x => this.renderer = x} 
                            array={this.state.array} 
                            onSwap={(a,b) => this.updateSound(a,b)}
                            onAnimationFinished={()=> this.stopSortAnimation()}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

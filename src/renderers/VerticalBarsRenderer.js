import React, { Component } from 'react';
import { Utils } from '../utils/Utils'
import { SortResult } from '../algorithms/factory/SortResult.js'; 

import './VerticalBarsRenderer.css'

export const MAX_ARRAY_ELEMENT = 359;

export const INITIAL_COLOR = "darkgray";
export const SORTED_COLOR = "green";
export const COMPARE_COLOR = "red";
export const SWAP_COLOR = "red";
export const REPLACE_COLOR = "violet";
 
export class VerticalBarsRenderer extends Component{ 
    static displayName = VerticalBarsRenderer.name;

    constructor(props) {
        super(props);

        this.state = { 
            array: this.props != null && this.props.array != null 
                ? this.props.array 
                : [], 
        };

        this.animState = {
            loop: null, // The timer for the steps (this.loopFunction)
 
            playing: false, // To skip animations
            delay: 1, // To skip animations
            
            animations: null, // Animations from SortResult
            currentStep: 0, // To be able to go to the next step 

            toUncolor: [] // The elements that need to be uncolored
        };
            
        this.bars = []; // Refereces to vertical bars
    }   

    // Specific methods
    paintArray(color) {   
        for (let i = 0; i < this.state.array.length; i++) 
            this.bars[i].style.backgroundColor = color; 
    }
    paintArrayIndex(color, index) {
        if (index < this.state.array.length && index >= 0)  
            this.bars[index].style.backgroundColor = color; 
    }
    loopFunction = () => {
        let currentStep = this.animState.currentStep;
        let animations = this.animState.animations;
 
        // End the loop
        if (currentStep >= animations.length) {
            // Event
            if(this.props != null && this.props.onAnimationFinished != null)
                this.props.onAnimationFinished();
            
            this.stop(); 
            this.paintArray(SORTED_COLOR); 
            
            return;
        } 
        
        // Skip useless animations at high speed
        while( this.animState.delay === 1 && 
            this.animState.playing === true && 
            (SortResult.isCompareAnimation(animations[this.animState.currentStep]) ||
            SortResult.isWaitAnimation(animations[this.animState.currentStep]) ) 
        ) {   
            this.animState.currentStep++; 
            currentStep++;
        } 
        // Skip useless animations while stepping
        while( this.animState.playing === false && SortResult.isWaitAnimation(animations[this.animState.currentStep]) ) {   
            this.animState.currentStep++; 
            currentStep++;
        }
        
        // Uncolor the last colored elements
        while (this.animState.toUncolor.length > 0) {
            this.paintArrayIndex(INITIAL_COLOR, this.animState.toUncolor.pop());
        }
        
        // Play the animation
        if (SortResult.isWaitAnimation(animations[currentStep])) { 
            // Event
            if(this.props != null && this.props.onWait != null)
                this.props.onWait();

        } else if (SortResult.isCompareAnimation(animations[currentStep])) {   
            this.paintArrayIndex(COMPARE_COLOR, animations[currentStep].i);
            this.paintArrayIndex(COMPARE_COLOR, animations[currentStep].j);

            // Event
            if(this.props != null && this.props.onCompare != null)
                this.props.onCompare();

            // Store indices to uncolor
            this.animState.toUncolor.push(animations[currentStep].i, animations[currentStep].j);

        } else if (SortResult.isSwapAnimation(animations[currentStep])) { 
            let a = animations[currentStep].i;
            let b = animations[currentStep].j;
            
            this.paintArrayIndex(SWAP_COLOR, a);
            this.paintArrayIndex(SWAP_COLOR, b);
             
            let temp = this.state.array[a];
            // eslint-disable-next-line
            this.state.array[a] = this.state.array[b];
            // eslint-disable-next-line
            this.state.array[b] = temp;

            this.setState({update: true}); // because i'm not using setState above

            // Event
            if(this.props != null && this.props.onSwap != null)
                this.props.onSwap(this.state.array[a],this.state.array[b]);

            // Store indices to uncolor
            this.animState.toUncolor.push(animations[currentStep].i, animations[currentStep].j);

        } else if (SortResult.isReplaceAnimation(animations[currentStep])) { 
            for (let k = animations[currentStep].i; k <= animations[currentStep].j; k++) {
                this.paintArrayIndex(REPLACE_COLOR, k);
                
                // Store indices to uncolor
                this.animState.toUncolor.push(k); 

                // eslint-disable-next-line
                this.state.array[k] = animations[currentStep].subArrayToReplace[k - animations[currentStep].i];
            }
            this.paintArrayIndex(COMPARE_COLOR, animations[currentStep].i);
            this.paintArrayIndex(COMPARE_COLOR, animations[currentStep].j);
             
            // Event
            if(this.props != null && this.props.onReplace != null)
                this.props.onReplace(this.state.array[animations[currentStep].i],this.state.array[animations[currentStep].j]);
  
            this.setState({update: true}); // because i'm not using setState above

        }
        
        // Event
        if(this.props != null && this.props.onNextStep != null)
            this.props.onNextStep();
  
        // Update the current step
        this.animState.currentStep++;
    }

    // Mandatory methods 1
    isPlaying(){ 
        return this.animState.playing; 
    }
    start(animations, delay){ 
        if(this.state.array.length === 0)
            return;

        if (this.animState.currentStep !== 0){
            this.resume(delay);
            return;
        }  

        this.stop(); 
  
        // Init
        this.animState.playing = true;
        this.animState.delay = delay;
        this.animState.animations = animations; 
        this.animState.currentStep = 0;  
        this.animState.toUncolor = [];
        this.paintArray(INITIAL_COLOR);
 
        // Start the loop 
        this.animState.loop = setInterval(this.loopFunction, delay);

    }
    resume(delay){ 
        if(this.state.array.length === 0) 
            return; 

        this.animState.playing = true; 
        this.animState.delay = delay;
        this.animState.loop = setInterval(this.loopFunction, delay); 
    }
    pause(){ 
        clearInterval(this.animState.loop); 
        this.animState.playing = false;
    }
    stop(){ 
        this.animState.playing = false;

        clearInterval(this.animState.loop);
        this.animState.currentStep = 0; 
        this.paintArray(INITIAL_COLOR); 
    }
    // Mandatory methods 2
    next() { 
        this.loopFunction(); 
    }
    getCurrentStep(){ 
        return this.animState.currentStep; 
    }
    setArray(newArray){
        this.stop();
        this.setState({array: newArray});
    }
    newRandomArray(size){ 
        let arr = [];
        for (let i = 0; i < size; i++) {
            arr.push(Utils.randomNumber(1, MAX_ARRAY_ELEMENT));
        }
        this.setState({ array: arr }); 

        return arr;
    }
 
    // Render method
    render() {   
        return (  
            <div className="vbars-render-zone">
                {
                    this.state.array.map((number, index) => 
                        <div key={index} ref={x=>this.bars[index] = x} style={{
                            height: number,
                            marginTop: Math.max(...this.state.array) - number
                        }} className="vertical-bar"></div>
                    )
                }
            </div> 
        );
    }
}
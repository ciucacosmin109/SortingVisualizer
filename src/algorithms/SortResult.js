/* 
sortedArray : []
animations : [...]

*/

export class SortEmptyAnimation { } 
export class SortCompareAnimation {
    constructor(i_idx, j_idx) {
        this.i = i_idx;
        this.j = j_idx;
    }
}
export class SortSwapAnimation {
    constructor(i_idx, j_idx) {
        this.i = i_idx;
        this.j = j_idx;
    }
} 
export class SortReplaceAnimation {
    constructor(i_idx, j_idx, subArrToReplace) {
        this.i = i_idx;
        this.j = j_idx;
         
        this.subArrayToReplace = subArrToReplace;
    }
}

export class SortResult {
    constructor() { 
        this.sortedArray = []; 
        this.animations = []; 
    }

    addAnimationObject(anim) {
        this.animations.push(anim);
    } 

    addEmptyAnimation(nrEmptyAnims) {
        for (let i = 0; i < nrEmptyAnims; i++) { 
            let anim = new SortEmptyAnimation();
            this.animations.push(anim);
        }
    }
    addCompareAnimation(i_idx, j_idx) {
        let anim = new SortCompareAnimation(i_idx, j_idx);
        this.animations.push(anim);
    }
    addSwapAnimation(i_idx, j_idx) {
        let anim = new SortSwapAnimation(i_idx, j_idx);
        this.animations.push(anim);
    }
    addReplaceAnimation(i_idx, j_idx, subArrToReplace) {
        let anim = new SortReplaceAnimation(i_idx, j_idx, subArrToReplace);
        this.animations.push(anim);
    } 

    static isEmptyAnimation(animation) { return (animation instanceof SortEmptyAnimation); }
    static isCompareAnimation(animation) { return (animation instanceof SortCompareAnimation); }
    static isSwapAnimation(animation) { return ( animation instanceof SortSwapAnimation ); }
    static isReplaceAnimation(animation) { return (animation instanceof SortReplaceAnimation); }


}
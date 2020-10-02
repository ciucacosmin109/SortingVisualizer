import { AlgorithmMap } from './AlgorithmMap' 

export class AlgorithmFactory { 
    static getAllAlgorithmNames(){
        return Object.keys(AlgorithmMap);
    }
    static getAlgorithm(algoName){
        return AlgorithmMap[algoName]; 
    } 
}
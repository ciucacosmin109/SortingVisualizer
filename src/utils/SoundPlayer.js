const MIN_FREQ = 180;
const MAX_FREQ = 750;

export class SoundPlayer {
    constructor(){ 
        this.sound = {  
            audioContext : null,
            gainNode : null,
            oscillator : null
        };  
    }

    initSoundService(){   
        this.deleteSoundService();

        this.sound.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        this.sound.gainNode = this.sound.audioContext.createGain()
        this.sound.gainNode.gain.value = 0.15 
        this.sound.gainNode.connect(this.sound.audioContext.destination)

        this.sound.oscillator = this.sound.audioContext.createOscillator();
        this.sound.oscillator.type = 'sine'; // sine, square, sawtooth, triangle
        this.sound.oscillator.frequency.value = 0; 
        this.sound.oscillator.connect(this.sound.gainNode);
        
        this.sound.oscillator.start(this.sound.audioContext.currentTime); 
    } 
    deleteSoundService(){ 
        if(this.sound.oscillator === null)
            return;
        
        this.sound.oscillator.stop(this.sound.audioContext.currentTime); 
        this.sound.oscillator = null;

        this.sound.gainNode.disconnect();
        this.sound.gainNode = null;
        
        this.sound.audioContext.close();
        this.sound.audioContext = null;
    }

    setOscillatorFrequency(val, max){
        if(this.sound.oscillator !== null)
            this.sound.oscillator.frequency.value = 
                val / max * (MAX_FREQ - MIN_FREQ) + MIN_FREQ;
    }
    clearOscillatorFrequency(){
        if(this.sound.oscillator !== null)
            this.sound.oscillator.frequency.value = 0;
    }
}
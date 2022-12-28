
// Prints a heartfelt apology to the console.
export const sorry = ( qty, subject ) => {
    let apology = `${ qty } aplogies for what happened regarding ${ subject }.`
    console.log( apology )
}

// Returns a JSON object containing an aray of reults
export const search = ( param ) => { 
    console.log( "Searching..." ) 
    return { 
        results: [
            { id: 0, name: `Result One is related to ${ param }`},
            { id: 1, name: `Result Two is related to ${ param }`},
            { id: 2, name: `Result Three is related to ${ param }`},
        ] 
    }
}

// Beep for 500 milliseconds
export const beep = ( ) => {
    var context = new AudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 700;
    oscillator.connect(context.destination);
    oscillator.start(); 
    setTimeout(function () {
        oscillator.stop();
    }, 100); 
}


// Boop for 500 milliseconds
export const boop = ( ) => {
    var context = new AudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 200;
    oscillator.connect(context.destination);
    oscillator.start(); 
    setTimeout(function () {
        oscillator.stop();
    }, 100); 
}
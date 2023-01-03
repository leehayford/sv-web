
export const P  = { 
    scr_: '<script>',  
    _scr: '</script>', 
};

export const menuJS1 = `

    /* Import the Menu component...*/
    import Menu from "../../common/menu/Menu.svelte"

    /* The MenuOption class may be used to define menu options */
    import { MenuOption } from "../../common/menu/menu"
    /* Though it is not necessary, see OptionFour */

    /* Example functions ... not required or recommended for use elsewhere...*/
    import { sorry, search, boop } from './menuExample'

`

export const JS2 = `



`

// Prints a heartfelt apology to the console.
export const sorry = ( qty, subject ) => {
    let apology = `${ qty } aplogies for what happened regarding ${ subject }.`
    console.log( apology )
    return apology
}

// Returns a JSON object containing an aray of reults
export const search = ( param ) => { 
    console.log( "Searching..." ) 
    return { 
        results: [
            { id: 0, name: `Search Result One`},
            { id: 1, name: `Search Result Two`},
            { id: 2, name: `Search Result Three`},
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
    }, 200); 
}
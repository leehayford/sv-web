
export const P  = { 
    scr_: '<script>',  
    _scr: '</script>', 
};

export const multiJS = `

    /* Import the InputTextArea Component */
    import InputTextArea from "../../common/input_text_area/InputTextArea.svelte";

    /* A variable to set / capture the value. */
    let singleLineText 

    /* A variable to manage enable / disable. */
    let multiEnable = false

    /* A Button to toggle the value of inpuTextEnable */
    import Button from '../../common/button/Button.svelte'
    let buttonColor = 'bg-accent' // Button color
    let buttonText = 'Enable' // Button text
    const toggleEnable = ( ) => { 
        enable = !enable
        if( enable ) {  
            buttonColor = 'bg-purple';
            buttonText = 'Disable';
        } else { 
            buttonColor = 'bg-accent'; 
            buttonText = 'Enable'; 
        }
    }

`
export const multiHTML = `<div>

    <InputTextArea 
        bind:txt={ multiLineText }
        place="this is a placeholder value"
        lbl="Multi-Line Text Input"
        remMinHeigh=5
        bind:enabled={ multiEnable }
        />
    
        <div id="button-container">

        <Button 
            on:click={ toggleEnable } 
            bind:cls={ buttonColor }
        >
            { buttonText }
        </Button>
    
        </div>
        
    </div>
`


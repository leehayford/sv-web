
export const P  = { 
    scr_: '<script>',  
    _scr: '</script>', 
};

export const singleJS = `

    /* Import the InputText Component */
    import InputText from '../../common/input_text/InputText.svelte'

    /* A variable to set / capture the value. */
    let inpuTextValue 

    /* A variable to manage enable / disable. */
    let inputTextEnable = false

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

export const singleHTML = `<div>

    <InputText 
    bind:txt={ inpuTextValue }
    place="InputText placeholder value"
    lbl="InputText label value"
    bind:enabled={ inputTextEnable }
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

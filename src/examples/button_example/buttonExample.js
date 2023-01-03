
export const P  = { 
    scr_: '<script>',  
    _scr: '</script>', 
};

export const JS = `

    /* Import the Button Component */
    import Button from '../../common/button/Button.svelte'

    /* variables to manage the enable state, text and color of the left button */
    let leftEnabled = true
    let leftButton = 'Enable Right Button'
    let leftButtonColor = 'bg-accent'

    /* variables to manage the enable state, text and color of the right button */
    $: rightEnabled = !leftEnabled
    let rightButton = 'Disabled'
    let rightButtonColor = 'bg-purple'

    /* a function to toggle the state of the buttons */
    const toggle = ( ) => {
        leftEnabled = !leftEnabled
        if( leftEnabled ) {
            leftButton = 'Enable Right Button'
            leftButtonColor = 'bg-accent'
            rightButton = 'Disabled'
            rightButtonColor = 'bg-purple'
        } else {
            leftButton = 'Disabled'
            leftButtonColor = 'bg-purple'
            rightButton = 'Enable Leftt Button'
            rightButtonColor = 'bg-accent'
        }
    }
    
`

export const HTML = `<div>
      
    <div class="flx-row">

    <Button
        on:click={ toggle }
        bind:cls={ leftButtonColor }
        bind:enabled={ leftEnabled }
    >{ leftButton }</Button>

    <Button
        on:click={ toggle }
        bind:cls={ rightButtonColor }
        bind:enabled={ rightEnabled }
    >{ rightButton }</Button>

    </div>

</div>
`
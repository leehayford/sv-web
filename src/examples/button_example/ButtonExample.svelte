<script>

    /* Code Formatting */
    import Prism from 'prismjs'
    import { P, JS, HTML } from './buttonExample' 
    /* Code Formatting */

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
            rightButton = 'Enable Left Button'
            rightButtonColor = 'bg-accent'
        }
    }

</script>

<svelte:head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-solarizedlight.min.css" rel="stylesheet" />
</svelte:head>

<div class="flx-row" id="content">

    <div class="flx-col" id="left-pane">

        <div class="flx-col" id="left-pane-header">

            <h3 class="accent">Button Example</h3>
            <p>Component Source Code:
                <span class="fg-accent">~/src/common/button</span>
            </p>
    
        </div>

        <br>

        <div class="flx-col" id="left-pane-detail">
            
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

    </div>

    <div class="flx-col" id="right-pane">

        <div class="flx-col" id="right-pane-header">

            <h3 class="accent">Button Example Code</h3> 
            <p>Example ( this page ) Source Code :
                <span class="fg-accent">~/src/examples/button_example</span>
            </p>

        </div>

        <br>

        <div class="flx-col" id="right-pane-detail">

            <div class="code-snippet">
                { @html Prism.highlight(P.scr_, Prism.languages[ 'html' ] ) }
                { @html Prism.highlight(JS, Prism.languages[ 'javascript' ] ) }
                { @html Prism.highlight(P._scr, Prism.languages[ 'html' ] ) }
            </div>
    
            <div class="code-snippet">
                { @html Prism.highlight(HTML, Prism.languages[ 'html' ] ) }
            </div>

        </div>

    </div>

</div>


<style>

    #content {
        gap: 1rem;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    #left-pane {
        min-width: 30rem;
        width: 30rem;
    }
    #left-pane-detail {
        height: 100%
    }

    /* #button-container {
        margin-left: 0.25rem;
        width: 5rem;
    } */

    #right-pane-detail {
        background-color: var(--dark);
        border-radius: 0.25rem;
        padding: 1rem;
		overflow-y: scroll; 
		overflow-x: hidden;
    }
    
    .code-snippet {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
        width: 100%;
        white-space: pre-wrap;
    }

</style>


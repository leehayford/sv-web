<script>

    /* Code Formatting */
    import Prism from 'prismjs'
    import { P, multiJS, multiHTML } from './inputTextAreaExample' 
    /* Code Formatting */

    /* Import the InputTextArea Component */
    import InputTextArea from "../../common/input_text_area/InputTextArea.svelte";
    
    /* A variable to set / capture the value. */
    let multiLineText
    
    /* A variable to manage enable / disable. */
    let enable = false

    /* A Button to toggle the value of inpuTextEnable */
    import Button from '../../common/button/Button.svelte';
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

    let lines = [ ]
    $: { 
        if ( multiLineText != undefined ) {
            lines = multiLineText.split("\n")
        }
    }

</script>

<svelte:head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-solarizedlight.min.css" rel="stylesheet" />>
</svelte:head>

<div class="flx-row" id="content">

    <div class="flx-col" id="left-pane">

        <div class="flx-col"  id="left-pane-header">

            <h3 class="accent">InputTextArea</h3>
            <p>Component Source Code:
                <span class="fg-accent">~/src/common/input_text_area</span>
            </p>
            
        </div>
            
        <br>

        <div class="flx-col" id="left-pane-detail">

            <InputTextArea 
                bind:txt={ multiLineText }
                place="this is a placeholder value"
                lbl="Multi-Line Text Input"
                remMinHeigh=5
                bind:enabled={ enable }
                />

            <div id="button-container">
                
                <Button 
                    on:click={ toggleEnable } 
                    bind:cls={ buttonColor }
                    >
                    { buttonText }
                </Button>

            </div>
            
            <br>
            
            <div class="flx-col">
                <h4>Output:</h4>
                { #if multiLineText != null } 
                    {#each lines as line }
                        <p>{ line }</p>
                    { /each}
                { /if }
            </div>

        </div>
        
    </div>
        
    <div class="flx-col" id="right-pane">

        <div class="flx-col" id="right-pane-header">

            <h3 class="accent">InputTextArea Usage</h3>             
            <p>Example ( this page ) Source Code :
                <span class="fg-accent">~/src/examples/input_text_area_example</span>
            </p>

        </div>

        <br>

        <div class="flx-col" id="right-pane-detail">

            <div class="code-snippet">
                { @html Prism.highlight(P.scr_, Prism.languages[ 'html' ] ) }
                { @html Prism.highlight(multiJS, Prism.languages[ 'javascript' ] ) }
                { @html Prism.highlight(P._scr, Prism.languages[ 'html' ] ) }
            </div>
            <div class="code-snippet">
                { @html Prism.highlight(multiHTML, Prism.languages[ 'html' ] ) }
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

    #button-container {
        width: 5rem;
    }

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
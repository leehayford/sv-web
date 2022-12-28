<script>

    /* The Menu components takes:
            bg: string ==> the name of a css class ( see /public/global.css )
            ops: [ ]object  ==> array of menu option objects, 
    */

    export let bg = 'bg-aqua'; 
    /* set backgroung-color and hover behavior*/
    /* 
        .bg-aqua { background-color: var(--aqua_a); }
        .bg-aqua:hover { background-color: var(--aqua); }
    */ 
    /* ( see ~/public/global.css ) */

    export let ops; 
    /* 
        [ 
            {
                Op: functionA
                    // Provide ONLY the name of the function; 
                            // NOT functionA( x, y, z )
                    // Use anonymous functions to handle return values
                            // ( ) => { reult = functionB( ) }

                Args: [ int, string, object ], 
                        // Mixing data types is OK in javascript... even though it feels wrong...
                        // Provide an empty array when Op takes no arguments
                
                Label: "Click Me"
                        // Labels are mandatory
                        // Keep them <~ 20 characters
                
                Tip: "Details about the function..."
                        // Where cryptic lables are ncessary,
                        // Provide clarity with a Tip
            },
            {
                Op: ( p ) => { reult = functionC( p ) },         
                Args: [ "parameter" ],      
                Label: "Tricky Stuff"
            }   
        ]  
    */
     

</script>

<div class="exp">
    
    <div class="icon { bg }">
        <!-- <img src="/img/menu.svg" alt="menu icon" /> -->
        <!-- <svg width="23" height="23" viewBox="0 0 6.0854165 6.0854168" version="1.1" id="menu_svg"> -->
        <svg width="1.8rem" height="1.8rem" viewBox="0 0 6 6" version="1.1" id="menu_svg">
            <g  transform="translate(0,-291)">
                <path class="menu-svg"
                        d=" 
                        M 0 0 
                            L 0 27 
                            L 27 27 
                            L 27 0 
                            L 0 0 
                        z 
                        M 4.5 4 
                            L 18.5 4 
                                C 19.331 4 20 4.669 20 5.5 
                                C 20 6.331 19.331 7 18.5 7 
                            L 4.5 7 
                                C 3.669 7 3 6.331 3 5.5 
                                C 3 4.669 3.669 4 4.5 4 
                        z 
                        M 4.5 10 
                            L 18.5 10 
                                C 19.331 10 20 10.669 20 11.5 
                                C 20 12.331 19.331 13 18.5 13 
                            L 4.5 13 
                                C 3.669 13 3 12.331 3 11.5 
                                C 3 10.669 3.669 10 4.5 10 
                        z 
                        M 4.5 16 
                            L 18.5 16 
                                C 19.331 16 20 16.669 20 17.5 
                                C 20 18.331 19.331 19 18.5 19 
                            L 4.5 19 
                                C 3.669 19 3 18.331 3 17.5 
                                C 3 16.669 3.669 16 4.5 16 
                        z 
                        "
                        transform="matrix(0.27,0,0,0.27,0,291)"
                    />
            </g>
        </svg>
    </div>

    <div class="ops">
        { #each ops as op ( op.Label ) }

            <div class="op" on:click={ ( ) => { op.Op( ...op.Args ) } } on:keyup >
                { op.Label }
                { #if op.Tip != null }
                    <div class="tip">{ op.Tip }</div>
                { /if }
            </div>

        {/each}
    </div>

    <!-- <?xml version="1.0" encoding="UTF-8" standalone="no"?> -->


</div>

<style>
    .icon {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        height: 1.7rem;
        width: 1.7rem;
        border-radius: 0.19rem;
    }
    .menu-svg {
        fill:var(--dark);
        fill-opacity:1;
        stroke:none;
        stroke-width:7.0743742;
        stroke-miterlimit:4;
        stroke-dasharray:none;
        stroke-opacity:1
    }
    .exp {
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 13px;
    }
    .exp:hover .ops {
        display: block;
        left: 13px;
        top: 15px;
        z-index: 1000;
    }
    .ops {
        display: none;
        flex-direction: column; 
        position: absolute;
        padding: 0.23rem;
        border: 1px solid var(--light_a);
        border-radius: 0.19rem;
        background-color: var(--dark);
        z-index: 1000;
    }    
    .op {
        white-space: nowrap;
        border-radius: 0.19rem;
        color: var(--light_a);
        z-index: 1000;
    }
    .op:hover {
        color: var(--light);
    }
    .op .tip {
        visibility: hidden;
        background-color: var(--grey);
        color: var(--dark);
        text-align: left;
        position: absolute;
        left: 23px;
        height: 20px;
        padding: 0 8px;
        border-radius: 10px;
    }
    .op:hover .tip {
        visibility: visible;
    }


</style>


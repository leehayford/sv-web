
<script>

    /* Code Formatting */
    import Prism from 'prismjs'
    // import { P, singleJS, singleHTML } from './inputTextExample' 
    /* Code Formatting */

    /* Import the Menu component...*/
    import Menu from "../../common/menu/Menu.svelte"

    /* The MenuOption class may be used to define menu options */
    import { MenuOption } from "../../common/menu/menu"
    /* Though it is not necessary, see OptionFour */

    // import InputTextArea from "../../common/input_text_area/InputTextArea.svelte";
    
    /* Example functions ... not required or recommended for use elsewhere...*/
    import { sorry, search, boop } from './menuExample'


    const reset = ( ) => { disp = intro }
    // Op --> Provide ONLY the name of the function; 'reset' NOT 'reset( )'
    // Args  ==> Pass an empty array when Op takes no arguments
    // Label -->  Where cryptic lables are ncessary... 
    // Tip --> Provide some clarity with a Tip
    const OptionOne = new MenuOption (
        reset,       
        [ ],         
        "Reset",     
        "Show the original text."   
    )

    // Op --> Use anonymous functions to handle return values
    // Args --> Mixing data types is OK in javascript... even though it feels wrong...
    const OptionTwo = new MenuOption ( 
        ( qty, subject ) => { disp = sorry( qty, subject ) },    
        [ 1000, "Yermom" ],    
        "Sorry",  
        "Generates a heartfelt apology for you."   
    )

    // We need NOT provide a Tip
    let results 
    const OptionThree = new MenuOption ( 
        ( p ) => { results = search( p ) },  
        [ "parameter" ],                            
        "Search"                                      
    )

    // Define an option WITHOUT using the MenuOption object...
    const OptionFour = { Op: boop, Args: [ ], Label: "Boop" }

    /* Create an array of predefined options */
    let options = [  OptionOne,  OptionTwo, OptionThree, OptionFour ]

    /* or... 
        When fear and shame drive us to write code both: 
        SUPER TOIGHT, and SUPER HARD TO FOLLOW  */
         
    let sum = 0, a = 3, b = 6, click = 0;
    $: { if ( click > 0 ) { console.log( `Yup, ${ sum }` ); disp = `Yup, ${ sum }` } } 

    /* Create an array of options on the fly */
    let ops = [ 
        new MenuOption( ( x, y ) => { sum = x + y; click++; }, [ a, b ], `${ a } + ${ b } = ?`, "Probably 9" ),
        new MenuOption( ( x, y ) => { sum = y - x; click++; }, [ a, b ], `${ b } - ${ a } = ?`, "Probably 3" ),
        { Op: ( x, y ) => { sum = x * y; click++; }, Args: [ a, b ], Label: `${ a } * ${ b } = ?`, Tip: "Probably 18" },
        { Op: ( x, y ) => { sum = y / x; click++; }, Args: [ a, b ], Label: `${ b } / ${a } = ?`, Tip: "Probably 2" },
    ]


</script>

<svelte:head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism-solarizedlight.min.css" rel="stylesheet" />
</svelte:head>

<div class="flx-col">

    <div class="flx-row">
    
        <div class="flx-col">

            <h3 class="accent">Menu</h3>
            <p>Component Source Code:<br>
                <span class="fg-accent">~/src/common/menu</span>
            </p>   

            <br>
        
            <!-- We can define the ops array as we pass it to the Menu component -->
            <Menu bg='bg-pink' ops={ [ OptionOne, OptionTwo, OptionThree, OptionFour  ] } />
        
            <!-- We can pass a predefined array 'options' to the Menu component -->
            <Menu bg='bg-purple'  ops={ options } />
        
            <!-- We can shorten things if the predefined array is called 'ops' as it is in the Menu component -->
            <Menu { ops } />
        


            <p>Above are some examples of the 
                <span class="fg-accent" style="font-style:oblique;"> Menu</span> component.
            </p>
            <p>Menu Usage Example Source Code ( this page ):<br>
                <span class="fg-accent">~/src/examples/menu_example</span>
            </p>     

        </div>


    </div>

</div>

<style>

</style>



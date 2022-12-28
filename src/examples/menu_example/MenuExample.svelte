
<script>

    /* Import the Menu component into our svelte component...*/
    import Menu from "../../common/menu/Menu.svelte"

    /* We  can use the MenuOption class to define our options... but we don't have to...*/
    import { MenuOption } from "../../common/menu/menu"

    /* Example functions ... not required or recommended for use elsewhere...*/
    import { sorry, search, boop, beep } from './menuExample'

    
    /*******************************************/
    /* OptionOne *****************************/
    const OptionOne = new MenuOption ( 

        sorry, 
        // Op --> Provide ONLY the name of the function; 'sorry' NOT 'sorry( )' 

        [ 1000, "Yermom" ],  
        // Args --> Mixing data types is OK in javascript... even though it feels wrong... 

        "Sorry", 
        // Label -->  Where cryptic lables are ncessary... 

        "Prints a heartfelt apology to the console." 
        // Tip --> Provide some clarity with a Tip 

    )

    let results
    $: { // Watch 'search_results' and print it on change
        if ( results != undefined ) { 
            console.log( results ) 
        } 
    }  

    /*******************************************/
    /* OptionTwo *****************************/
    const OptionTwo = new MenuOption ( 
        ( p ) => { results = search( p ) },  // Op --> Use anonymous functions to handle return values 
        [ "parameter" ],                            // Args 
        "Search Fake Database"              // Label 
        // We need NOT provide a Tip
    )

    /*******************************************/
    /* OptionThree ***************************/    
    // const OptionThree = new MenuOption ( 
    //     beep,    // Op
    //     [ ],         // Args  ==> Pass an empty array when Op takes no arguments 
    //     "Beep" // Label 
    // ) 
    const OptionThree = new MenuOption ( beep, [ ], "Beep" )

    /*******************************************/
    /* OptionFour ****************************/
    // Define an option WITHOUT using the MenuOption object...
    // const OptionFour = { 
    //     Op: boop,   
    //     Args: [ ],      
    //     Label: "Boop" 
    //     // Tipping remains optional 
    // }
    const OptionFour = { Op: boop, Args: [ ], Label: "Boop" }

    /*******************************************/
    /* Create an array of predefined options */
    let options = [  OptionOne,  OptionTwo, OptionThree, OptionFour ]

    /* or... 
        When fear and shame drive us to write code both: 
        SUPER TOIGHT, and SUPER HARD TO FOLLOW  */

    /*******************************************/
    /* Create an array of options on the fly */
    let sum = 0, a = 3, b = 6, click = 0;
    $: { if ( click > 0 ) { console.log( `Yup, ${ sum }` ) } } 
    let ops = [ 
        new MenuOption( ( x, y ) => { sum = x + y; click++; }, [ a, b ], `${ a } + ${ b }`, "Probably 9" ),
        new MenuOption( ( x, y ) => { sum = y - x; click++; }, [ a, b ], `${ b } - ${ a }`, "Probably 3" ),
        { Op: ( x, y ) => { sum = x * y; click++; }, Args: [ a, b ], Label: `${ a } * ${ b }`, Tip: "Probably 18" },
        { Op: ( x, y ) => { sum = y / x; click++; }, Args: [ a, b ], Label: `${ a } * ${ b }`, Tip: "Probably 2" },
    ]
        
</script>

<div class="flx-col menu-example">

    <h3 class="accent">Menu</h3>
    <div class="flx-row">
    
        <!-- The Menu components takes:
            ops: an array of options objects { Op, Args, Label, Tip }, 
            bg: the string name of a css class defining the background-color and hover  
        -->
        
        <!-- 
            We can define the ops array as we pass it 
            to the Menu component -->
        <Menu 
            bg='bg-pink' 
            ops={ [ 
                OptionOne, 
                OptionTwo,
                OptionThree,
                OptionFour
            ] } />
    
        <!-- 
            We can pass a predefined array 'options' 
            to the Menu component -->
        <Menu 
            bg='bg-purple' 
            ops={ options } 
            />
    
        <!-- 
            We can shorten things if: 
            -   the predefined array 'ops' has the same name 
            as the destination in the Menu component 
            -   and we don't care what color the menu is -->
        <Menu { ops } />
    
    </div>
    
    <p>Above are some examples of the <span class="accent">Menu</span> component.</p>
    <p>Menu Usage Example Source Code: <span class="accent">~/src/examples/menu_example</span></p>
    <p>Menu Component Source Code: <span class="accent">~/src/common/menu</span></p>

</div>

<style>
    .menu-example {
        background-color: var(--light_aa);
        padding: 1rem;
    }
</style>



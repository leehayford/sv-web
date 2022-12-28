<script>

    import MenuExample from "./examples/menu_example/MenuExample.svelte";
    // import { sorry, search } from './examples/menuExample'

    // let qty = 1000
    // let subject = "Yermom"

    // let searchParam = "some search parameter"
    // let searchResults = { results: [ ] }
    // $: { console.log( JSON.stringify( searchResults, null, 2 ) ) }

    // let ops = [
    //     { 
    //         // the function or method to run on click
    //         Op: sorry, 
            
    //         // an array of arguments... you can mix types... it's javascript...
    //         Args: [ qty, subject ], 

    //         // Shows up in the Menu options 
    //         Label: "Sorry",

    //         // Shows up when you hover on this Menu option 
    //         Tip: "Takes an integer, and string; prints some apologies" 

    //     },
    //     { 
    //         // Op can be an anonymous method to call an external function
    //         Op:  ( ) => { searchResults = search( searchParam ) }, 

    //         // our anonymous method takes no arguments but we need to supply an empty array
    //         Args: [ ],  

    //         // Shows up in the Menu options 
    //         Label: "Search", 

    //         // We don't need to supply a Tip 
    //         //Tip: NO TIP!!! 
    //     },
    // ]

    export let something;    
    
</script>

<main class="flx-col">

    <div class="flx-row">  
        <img class="logo" type="image/png"  src="/img/icon.png" alt="DataCan Logo">  
        <h1>{something}</h1>
    </div>

    <p>Is very obviously working as expected!</p>

    <div class="flx-row split">

        <div class="flx-col content side-bar">
            <h3>Side-bar</h3>
            <p>This is a thing in the side-bar.</p>
            <p>And this is also a similar thing.</p>
            <p>And also this is a similar thing.</p>
        </div>

        <div class="flx-col content">
            <h3>Content</h3>
            <MenuExample />
            <p>This more content.</p>
            <p>And this is also content.</p>
        </div>

    </div>

</main>

<style>
    main {
        padding: 1rem;
        background-color: var(--dark);
        color: var(--aqua_a);
        overflow: hidden;
        height: 100vh;
    }
    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.0rem;
        width: 3.0rem;
    }
    .split {
        align-items: flex-start;
        overflow: hidden;
        height: 100vh;
    }
    .content {
        background-color: var(--light_aa);
        padding: 1rem;
        overflow: hidden;
        height: 100vh;
    }
    .side-bar {
        width: 23rem;
    }
</style>
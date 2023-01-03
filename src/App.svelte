<script>

    import HeaderExample from "./examples/header_example/HeaderExample.svelte";
    import HeaderLoginExample from "./examples/header_login_example/HeaderLoginExample.svelte";

    import ButtonExample from "./examples/button_example/ButtonExample.svelte";
    import InputTextExample from "./examples/input_text_example/InputTextExample.svelte";
    import InputTextAreaExample from "./examples/input_text_area_example/InputTextAreaExample.svelte";
    import MenuExample from "./examples/menu_example/MenuExample.svelte";

    import Button from "./common/button/Button.svelte";

    let showButtonExample = false
    let showInputTextExample = false
    let showInputTextAreaExample = false
    let showMenuExample = false
    const clearContent = ( ) => {
        showButtonExample = false
        showInputTextExample = false
        showInputTextAreaExample = false
        showMenuExample = false
    }
    const buttonExample = ( ) => { clearContent( ); showButtonExample = true; }
    const inputTextExample = ( ) => { clearContent( ); showInputTextExample = true; }
    const inputTextAreaExample = ( ) => { clearContent( ); showInputTextAreaExample = true; }
    const menuExample = ( ) => { clearContent( ); showMenuExample = true; }

</script>

<main class="flx-col">

    <HeaderExample title="Example App" subtitle="You can change all of this" >
        
        <!-- <HeaderLoginExample /> -->

    </HeaderExample>

    <div class="flx-row" id="content">

        <div class="flx-col" id="left-pane">
            <h3>Examples</h3>
            
            <Button cls="bg-dark" on:click={ buttonExample }><h4>Button</h4></Button>
            <Button cls="bg-dark" on:click={ inputTextExample }><h4>InputText</h4></Button>
            <Button cls="bg-dark" on:click={ inputTextAreaExample }><h4>InputTextArea</h4></Button>
            <!-- <Button cls="bg-dark" on:click={ menuExample }><h4>Menu</h4></Button> -->

        </div>

        <div class="flx-col" id="right-pane">

            { #if showButtonExample }<ButtonExample />
            { :else if showInputTextExample }<InputTextExample />
            { :else if showInputTextAreaExample }<InputTextAreaExample />
            <!-- { :else if showMenuExample }<MenuExample /> -->

            { /if }

        </div>

    </div>

</main>

<style>

    main {
        background-color: var(--dark);
        color: var(--accent_a);
        padding-bottom: 1rem;
        height: 100vh;
    }
    #content {
        padding: 0 1rem;
        overflow: hidden;
        height: 100%;
    }
    #left-pane {
        background-color: var(--light_aa);
        padding: 1rem;
        min-width: 17rem;
        width: 17rem;
        height: 100%
    }
    #right-pane {
        background-color: var(--light_aa);
        padding: 1rem;
        overflow: hidden;
        height: 100%;
    }
</style>
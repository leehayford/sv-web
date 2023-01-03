<script>

    import InputText from "../../common/input_text/InputText.svelte";
    import Button from "../../common/button/Button.svelte";

    let cls = 'bg-accent'
    let enableLogin = true
    const login = ( user, pass ) => { 

        enableLogin = !enableLogin  // <== replace this with a call to some actual login function

        if( enableLogin ) { 
            cls = 'bg-accent' 
        }
        else { 
            cls = 'bg-purple' 
        } 

        console.log( `u: ${ user }, p: ${ pass } is authorized : ${ enableLogin } ` )
    }

    let username = ""
    $: { console.log( `Username: ${ username }` ) }

    let password =""
    $: { console.log( `Password: ${ password }` ) }

</script>


<div id="login">

    <InputText 
        txt={ username }
        place="enter username"
        lbl="Username"
        bind:enabled={ enableLogin }
    /> 
    
    <InputText 
        txt={ password }
        place="enter password"
        lbl="Password"
        bind:enabled={ enableLogin }
    /> 

    <div class="flx-col" id="button">
        
        <Button on:click={ login } bind:cls >

            { #if enableLogin } Login
            { :else } Logout
            { /if }

        </Button>

    </div>
    

</div>

<style>
       
    #login {
        display: grid;
        grid-template-columns: 1fr 1fr 0.3fr;
        justify-content: flex-end;
        align-items: flex-end;
        padding-right: 2rem;
        padding-bottom:0.5rem;
        width: 70rem;
        height: 100%;
        gap: 0.5rem;
    }

    #button {
        color: var(--dark_a);
        justify-content: flex-end;
    }

</style>
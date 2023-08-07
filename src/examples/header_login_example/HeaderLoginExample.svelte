<script>

    import InputText from "../../common/input_text/InputText.svelte";
    import InputPassword from "../../common/input_pw/InputPassword.svelte";
    import Button from "../../common/button/Button.svelte";

    import { onMount } from "svelte";

    import { AuthorizedUser, auth_user }from '../../stores/auth'

    export let title = "Clever Name"
    export let subtitle = "Is very obviously working as expected!"
    export let icon_path = "/img/icon.png"
    export let iicon_alt = "Applicaiotn logo"

    $: enableLogin = true
    $: loginButtonColor = ( enableLogin ? 'bg-accent' : 'bg-purple' )
    $: loginButtonText = ( enableLogin ? 'Login' : 'Logout' )
    $: loginButtonFunc = ( enableLogin ? login : logout )
    
    let email = ""
    let password = ""

    onMount( async( ) =>{
        try {
            let auth = JSON.parse( window.sessionStorage.getItem( "auth_user" ) )  // console.log(`auth: ${ JSON.stringify( auth, null, 4 ) }`)
            if ( auth.id ) { 
                    auth_user.set( auth )
                    enableLogin = false
            }
        } catch {
            enableLogin = true // console.log(`enableLogin: ${ enableLogin }`)
        } // console.log( JSON.stringify( $auth_user, null, 4 ) )
    } )

    const login = async( ) => { 

        let payload = JSON.stringify( { email: email, password: password } )

        let auth_res = await fetch( "https://des.leehayford.com/api/auth/login", {  // let auth_res = await fetch( "http://localhost:8007/api/auth/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
                body: payload             
            } 
        )
        let auth = await auth_res.json()

        if (auth.status === "success") { // console.log(`LOGGED IN!\n${ JSON.stringify( auth, null, 4 ) }`)

            let user_res = await fetch( "https://des.leehayford.com/user/me", { // let user_res = await fetch( "http://localhost:8007/user/me", {
                    method: "GET",
                    headers: { 'Authorization': `Bearer ${ auth.token }`}      
                } 
            )
            let usr = await user_res.json() // console.log(`AUTHENTICATED USER DATA!\n${ JSON.stringify( usr, null, 4 ) }`)
            
            auth_user.set( new AuthorizedUser( 
                usr.data.user.id, 
                usr.data.user.name, 
                usr.data.user.email, 
                usr.data.user.role,
                usr.data.user.provider, 
                usr.data.user.created_at, 
                usr.data.user.updated_at  
            ) )
            $auth_user.setToken( auth.token ) // console.log(`AUTHENTICATED USER DATA!\n${ JSON.stringify( $auth_user, null, 4 ) }`)

            window.sessionStorage.setItem( "auth_user", JSON.stringify( $auth_user ) ) // let sess = JSON.parse( window.sessionStorage.getItem( "auth_user" ) )  // console.log(`AUTHENTICATED USER SESSION DATA!\n${ JSON.stringify( sess, null, 4 ) }`)

            enableLogin = false

        } else {
            console.log(`NOT LOGGED IN!\n${ JSON.stringify( auth, null, 4 ) }`)
        }
    }
    const logout = async( ) => {

        let user_res = await fetch( "https://des.leehayford.com/api/auth/logout", {
        // let user_res = await fetch( "http://localhost:8007/api/auth/logout", {
                method: "GET",
                headers: { 'Authorization': `Bearer ${ $auth_user.token }` }, 
                credentials: "include"   
            } 
        )
        let usr = await user_res.json( )
        // console.log( `LOGGED OUT!\n${ JSON.stringify( usr, null, 4 ) }` )
        
        auth_user.set( { } )
        // console.log(`LOGGED OUT USER DATA!\n${ JSON.stringify( $auth_user, null, 4 ) }`)
        
        window.sessionStorage.setItem( "auth_user", JSON.stringify( $auth_user ) )
        // let sess = JSON.parse( window.sessionStorage.getItem( "auth_user" ) )
        // console.log(`LOGGED OUT USER SESSION DATA!\n${ JSON.stringify( sess, null, 4 ) }`)
        
        enableLogin = true
    }

</script>


<div class="flx-col container">

    <div class="flx-row content">  

        <div class="flx-col title-block">
            <div class="flx-row icon-block">
                <img type="image/png"  src={ icon_path } alt={ iicon_alt } class="icon" >  
                <h1>{ title }</h1>
            </div>
            <p class="subtitle">{ subtitle }</p>
        </div>

        <div class="flx-row login">

            { #if enableLogin }
            <InputText 
                bind:txt={ email }
                place="enter username"
                lbl="Username"
                bind:enabled={ enableLogin }
            /> 
            
            <InputPassword 
                bind:txt={ password }
                place="enter password"
                lbl="Password"
                bind:enabled={ enableLogin }
            /> 
            { :else }

                <h4>{ $auth_user.name } is in the house!</h4>

            { /if }

            <div class="flx-col button">
                
                <Button 
                    on:click={ loginButtonFunc } 
                    bind:cls={ loginButtonColor } 
                >{ loginButtonText }</Button>

        </div>

        </div>

    </div>

</div>

<style>
    .container {
        background-color: var(--light_aa);
        padding: 0.3rem;
        gap: 0;
    }
    .content {
        padding-left: 1rem;
        justify-content: space-between;
    }
    .title-block {
        min-width: 20rem;
        gap: 0;
    }
    .icon-block {
        padding: 0;
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.0rem;
        width: 3.0rem;
    }
    .subtitle {
        font-style: oblique;
    }
    .login {
        justify-content: flex-end;
        align-items: flex-end;
        padding-bottom: 0.5em;
        padding-right: 0.5em;
    }

    .button {
        max-width: 6em;
        min-width: 6em;
    }

</style>
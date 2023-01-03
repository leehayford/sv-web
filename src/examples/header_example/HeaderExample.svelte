
<script>

    export let title = "Clever Name"
    export let subtitle = "Is very obviously working as expected!"
    export let icon_path = "/img/icon.png"
    export let iicon_alt = "Applicaiotn logo"


</script>

<div class="flx-col" id="container">

    <div class="flx-row" id="content">  

        <div class="flx-col" id="title-block">
            <div class="flx-row" id="icon-block">
                <img type="image/png"  src={ icon_path } alt={ iicon_alt } id="icon" >  
                <h1>{ title }</h1>
            </div>
            <p id="subtitle">{ subtitle }</p>
        </div>

        <slot></slot>

    </div>


</div>

<style>
    #container {
        background-color: var(--light_aa);
        padding: 0.3rem;
        gap: 0;
    }
    #content {
        padding-left: 1rem;
        justify-content: space-between;
    }
    #title-block {
        min-width: 20rem;
        gap: 0;
    }
    #icon-block {
        padding: 0;
    }
    #icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.0rem;
        width: 3.0rem;
    }
    #subtitle {
        font-style: oblique;
    }
</style>
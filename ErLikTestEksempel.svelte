<script>
   import ErLikTest from "./ErLikTest.svelte"

    let gjoerForbokstavStor = (streng) => {
        let foersteBokstav = streng[0];
        let resten = streng.slice(1);
        return foersteBokstav.toUpperCase() + resten;
    }
</script>

<!--Legg merke til arrayet i inndataene.-->
<ErLikTest
   inndata={["liten"]}
   forventetUtdata={"Liten"}
   funksjon={gjoerForbokstavStor}
/>

<ErLikTest
   inndata={["liten"]}
   forventetUtdata={"Liten"}
   funksjon={gjoerForbokstavStor}
/>

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        //imagen
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
            console.log(data);
            //imágen
            let pokeImg = data.sprites.front_default;
            //estadísticas
            let hp= data.stats[0].base_stat;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let specialAttack = data.stats[3].base_stat;
            let specialDefense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            //nombre
            let species = data.forms[0].name;
            //tipos
            let types = data.types[0].type.name;
            //numero
            let num = data.id;
            //movimientos
            let mov = data.moves[0].move.name;
            let mov1 = data.moves[1].move.name;
            let mov2 = data.moves[2].move.name;
            let mov3 = data.moves[3].move.name;
            let mov4 = data.moves[4].move.name;
            let mov5 = data.moves[5].move.name;
            let mov6 = data.moves[6].move.name;

            console.log(pokeImg);
            pokeImage(pokeImg);

            console.log(hp);
            pokehp(hp);

            console.log(attack);
            attackPokemon(attack);
            console.log(defense);
            defPokemon(defense);
            console.log(specialAttack);
            specialPokemon(specialAttack);
            console.log(specialDefense);
            specialDef(specialDefense);
            console.log(speed);
            speedPokemon(speed);

            console.log(species);
            speciesPokemon(species);

            console.log(types);
            typePokemon(types);

            console.log(num);
            idPokemon(num);

            console.log(mov);
            movPokemon(mov);
            console.log(mov1);
            mov1Pokemon(mov1);
            console.log(mov2);
            mov2Pokemon(mov2);
            console.log(mov3);
            mov3Pokemon(mov3);
            console.log(mov3);
            mov4Pokemon(mov4);
            console.log(mov4);
            mov5Pokemon(mov5);
            console.log(mov6);
            mov6Pokemon(mov6);
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokehp = (url)=>{
    const numero  = document.getElementById("numero");
    numero.innerHTML = url;
}

const attackPokemon = (url) =>{
    const attack = document.getElementById("attack");
    attack.innerHTML = url;
}

const defPokemon = (url) =>{
    const defense = document.getElementById("defense");
    defense.innerHTML = url;
}

const specialPokemon = (url) =>{
    const specialAttack = document.getElementById("specialAttack");
    specialAttack.innerHTML = url;
}

const specialDef = (url) => {
    const specialDefense = document.getElementById("specialDefense");
    specialDefense.innerHTML = url;
}

const speedPokemon = (url) => {
    const speed = document.getElementById("speed");
    speed.innerHTML = url;
}

const speciesPokemon= (url)=>{
    const species = document.getElementById("species");
    species.innerHTML = url;
}

const typePokemon = (url) => {
    const types = document.getElementById("types");
    types.innerHTML = url;
}

const idPokemon = (url) => {
    const num = document.getElementById("num");
    num.innerHTML = url;
}

const movPokemon = (url) => {
    const mov= document.getElementById("mov");
    mov.innerHTML= url;
}

const mov1Pokemon = (url) => {
    const mov1= document.getElementById("mov1");
    mov1.innerHTML= url;
}

const mov2Pokemon = (url) => {
    const mov2 = document.getElementById("mov2");
    mov2.innerHTML = url;
}

const mov3Pokemon = (url) => {
    const mov3 = document.getElementById("mov3");
    mov3.innerHTML = url;
}

const mov4Pokemon = (url) => {
    const mov4 = document.getElementById("mov4");
    mov4.innerHTML = url;
}

const mov5Pokemon = (url) => {
    const mov5 = document.getElementById("mov5");
    mov5.innerHTML = url;
}

const mov6Pokemon = (url) => {
    const mov6 = document.getElementById("mov6");
    mov6.innerHTML = url;
}
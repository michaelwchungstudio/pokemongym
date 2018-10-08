// IAN POKEMON INFORMATION
var pokeSprite3 = document.getElementById('pokesprite3');
var pokeIDNum3 = document.getElementById('pokeidnum3');
var pokeName3 = document.getElementById('pokename3');
var pokeHP3 = document.getElementById('pokehp3');
var pokeAttack3 = document.getElementById('pokeattack3');
var pokeDefense3 = document.getElementById('pokedefense3');
var pokeAbilities3 = document.getElementById('pokeabilities3');

var iPoke1 = document.getElementById('ipoke1');
var iPoke2 = document.getElementById('ipoke2');
var iPoke3 = document.getElementById('ipoke3');

// IAN EVENT LISTENERS
iPoke1.addEventListener('click', function() {
  createPokemon3(130);
})

iPoke2.addEventListener('click', function() {
  createPokemon3(131);
})

iPoke3.addEventListener('click', function() {
  createPokemon3(149);
})

// TANJIM POKEMON INFORMATION
var pokeSprite2 = document.getElementById('pokesprite2');
var pokeIDNum2 = document.getElementById('pokeidnum2');
var pokeName2 = document.getElementById('pokename2');
var pokeHP2 = document.getElementById('pokehp2');
var pokeAttack2 = document.getElementById('pokeattack2');
var pokeDefense2 = document.getElementById('pokedefense2');
var pokeAbilities2 = document.getElementById('pokeabilities2');

var tPoke1 = document.getElementById('tpoke1');
var tPoke2 = document.getElementById('tpoke2');
var tPoke3 = document.getElementById('tpoke3');

// TANJIM EVENT LISTENERS
tPoke1.addEventListener('click', function() {
  createPokemon2(152);
})

tPoke2.addEventListener('click', function() {
  createPokemon2(172);
})

tPoke3.addEventListener('click', function() {
  createPokemon2(182);
})

// MICHAEL POKEMON INFORMATION
var pokeSprite1 = document.getElementById('pokesprite1');
var pokeIDNum1 = document.getElementById('pokeidnum1');
var pokeName1 = document.getElementById('pokename1');
var pokeHP1 = document.getElementById('pokehp1');
var pokeAttack1 = document.getElementById('pokeattack1');
var pokeDefense1 = document.getElementById('pokedefense1');
var pokeAbilities1 = document.getElementById('pokeabilities1');

var mPoke1 = document.getElementById('mpoke1');
var mPoke2 = document.getElementById('mpoke2');
var mPoke3 = document.getElementById('mpoke3');

// MICHAEL EVENT LISTENERS
mPoke1.addEventListener('click', function() {
  createPokemon1(134);
})

mPoke2.addEventListener('click', function() {
  createPokemon1(135);
})

mPoke3.addEventListener('click', function() {
  createPokemon1(136);
})

function createPokemon1(idnum) {
  $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
    success: function(response){
      pokeSprite1.style.backgroundImage = "url(" + response.sprites.front_default; + ")";
      pokeIDNum1.innerText = "ID: " + response.id;
      pokeName1.innerText = "Name: " + response.name.charAt(0).toUpperCase() + response.name.slice(1);
      pokeHP1.innerText = "HP: " + response.stats[5].base_stat;
      pokeAttack1.innerText = "Attack: " + response.stats[4].base_stat;
      pokeDefense1.innerText = "Defense: " + response.stats[3].base_stat;

      var abil = "";

      for(let i = 0; i < response.abilities.length; i++) {
        if(i == response.abilities.length-1) {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ".")
        }
        else {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ", ");
        }
      }

      pokeAbilities1.innerText = "Abilities: " + abil;
    }
  })
}

function createPokemon2(idnum) {
  $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
    success: function(response){
      pokeSprite2.style.backgroundImage = "url(" + response.sprites.front_default; + ")";
      pokeIDNum2.innerText = "ID: " + response.id;
      pokeName2.innerText = "Name: " + response.name.charAt(0).toUpperCase() + response.name.slice(1);
      pokeHP2.innerText = "HP: " + response.stats[5].base_stat;
      pokeAttack2.innerText = "Attack: " + response.stats[4].base_stat;
      pokeDefense2.innerText = "Defense: " + response.stats[3].base_stat;

      var abil = "";

      for(let i = 0; i < response.abilities.length; i++) {
        if(i == response.abilities.length-1) {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ".")
        }
        else {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ", ");
        }
      }

      pokeAbilities2.innerText = "Abilities: " + abil;
    }
  })
}

function createPokemon3(idnum) {
  $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
    success: function(response){
      pokeSprite3.style.backgroundImage = "url(" + response.sprites.front_default; + ")";
      pokeIDNum3.innerText = "ID: " + response.id;
      pokeName3.innerText = "Name: " + response.name.charAt(0).toUpperCase() + response.name.slice(1);
      pokeHP3.innerText = "HP: " + response.stats[5].base_stat;
      pokeAttack3.innerText = "Attack: " + response.stats[4].base_stat;
      pokeDefense3.innerText = "Defense: " + response.stats[3].base_stat;

      var abil = "";

      for(let i = 0; i < response.abilities.length; i++) {
        if(i == response.abilities.length-1) {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ".")
        }
        else {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ", ");
        }
      }

      pokeAbilities3.innerText = "Abilities: " + abil;
    }
  })
}

window.addEventListener('load', function() {
  (createPokemon1(Math.floor(Math.random() * 807)));
});

window.addEventListener('load', function() {
  (createPokemon2(Math.floor(Math.random() * 807)));
});

window.addEventListener('load', function() {
  (createPokemon3(Math.floor(Math.random() * 807)));
});

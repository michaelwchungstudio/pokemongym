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

var tPoke1 = document.getElementById('tpoke1');
var tPoke2 = document.getElementById('tpoke2');
var tPoke3 = document.getElementById('tpoke3');

var iPoke1 = document.getElementById('ipoke1');
var iPoke2 = document.getElementById('ipoke2');
var iPoke3 = document.getElementById('ipoke3');

// POKEMON OBJECT CLASS
class Pokemon{
    constructor(ajax){
        this.name;
        this.id;
        this.hp;
        this.attack;
        this.defense;
        this.image;
        this.height
        this.weight;
        this.type;
        this.abilities = []
        this.newCard(ajax)
     }

	newCard(ajaxNumber){
	var that = this
		$.ajax({url:"https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
			success: function (response) {
				that.getName(response)
			}
		})

	}

	getName(x){
		this.name = x.species.name
    this.id = x.id
		this.hp = x.stats[5].base_stat
		this.attack = x.stats[4].base_stat
		this.defense = x.stats[3].base_stat
		this.image = x.sprites.front_default
		this.height= x.height
		this.weight= x.weight
		this.type = x.types[0].type.name

    var abil = "";

    for(let i = 0; i < x.abilities.length; i++) {
      if(i == x.abilities.length-1) {
        abil += (x.abilities[i].ability.name.charAt(0).toUpperCase() + x.abilities[i].ability.name.slice(1) + ".")
      }
      else {
        abil += (x.abilities[i].ability.name.charAt(0).toUpperCase() + x.abilities[i].ability.name.slice(1) + ", ");
      }
    }

    this.abilities = abil
	}
}

var gyrados = new Pokemon(130)
var lapras = new Pokemon(131)
var dragonite = new Pokemon(149)

var pichu = new Pokemon(172);
var chikorita = new Pokemon(152);
var bellossom = new Pokemon(182);

var vaporeon = new Pokemon(134);
var jolteon = new Pokemon(135);
var flareon = new Pokemon(136);

// CREATE POKEMON FUNCTION FOR EACH TRAINER => CHANGES THAT TRAINER'S SECTION OF THE HTML PAGE
function displayPokemon(pokeObj) {
    pokeSprite1.style.backgroundImage = "url(" + pokeObj.image + ")";
    pokeIDNum1.innerText = "ID: " + pokeObj.id;
    pokeName1.innerText = "Name: " + pokeObj.name.charAt(0).toUpperCase() + pokeObj.name.slice(1);
    pokeHP1.innerText = "HP: " + pokeObj.hp
    pokeAttack1.innerText = "Attack: " + pokeObj.attack
    pokeDefense1.innerText = "Defense: " + pokeObj.defense
    pokeAbilities1.innerText = "Abilities: " + pokeObj.abilities;
}

// MICHAEL EVENT LISTENERS
mPoke1.addEventListener('click', function() {
  displayPokemon(vaporeon);
})

mPoke2.addEventListener('click', function() {
  displayPokemon(jolteon);
})

mPoke3.addEventListener('click', function() {
  displayPokemon(flareon);
})

// TANJIM EVENT LISTENERS
tPoke1.addEventListener('click', function() {
  displayPokemon(pichu);
})

tPoke2.addEventListener('click', function() {
  displayPokemon(chikorita);
})

tPoke3.addEventListener('click', function() {
  displayPokemon(bellossom);
})

// IAN EVENT LISTENERS
iPoke1.addEventListener('click', function() {
  displayPokemon(gyrados);
})

iPoke2.addEventListener('click', function() {
  displayPokemon(lapras);
})

iPoke3.addEventListener('click', function() {
  displayPokemon(dragonite);
})

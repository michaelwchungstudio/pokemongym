


class Pokemon{
    constructor(ajax){
        this.name; 
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
				console.log(response)
				that.getName(response)		
				
			}
		})

	}

	getName(x){
		this.name = x.species.name
		this.hp = x.stats[5].base_stat
		this.attack = x.stats[4].base_stat
		this.defense = x.stats[3].base_stat
		this.image = x.sprites.front_shiny
		this.height= x.height
		this.weight= x.weight
		this.type = x.types[0].type.name
		this.abilities= x.abilities
	}
}
	


var pokemon130 = new Pokemon(130)
var pokemon131 = new Pokemon(131)
var pokemon149 = new Pokemon(149)


var pokemon = [pokemon130, pokemon131, pokemon149]


var searchTitle = document.getElementById('searchTitle')
var submit= document.getElementById('submit')
var random = document.getElementById('random')
var submit2 = document.getElementById ('submit2')
var gyrados= document.getElementById('gyrados')
var lapras= document.getElementById('lapras')
var dragonite= document.getElementById('dragonite')

// random.addEventListener('click', newCard)
submit2.addEventListener('click', newCardSearch)

gyrados.addEventListener('click', newCard130)
lapras.addEventListener('click', newCard131)
dragonite.addEventListener('click',newCard149)





 document.addEventListener('load',getNum)

function getNum(min,max) {
  return Math.round(Math.random() * (max - min) + min);

   }





function newCardSearch(){

	$.ajax({url:"https://fizal.me/pokeapi/api/"+searchTitle.value+".json",
		success: function (response) {
			console.log(response)
			pokeimage.style.backgroundImage = "url(" +response.sprites.front_shiny+ ")"
			pokeimage.style.backgroundRepeat = "no-repeat"
			pokeimage.style.backgroundSize = "100% 100%"
			image.style.backgroundImage ="url(images/background.jpg)"
			image.style.backgroundSize ='100% 100%'
			name1.innerHTML= response.species.name
			hp.innerHTML=''+response.stats[5].base_stat+'HP'
			type.innerHTML=''+response.types[0].type.name+'Pokémon'
			weight1.innerHTML= 'Weight:'+response.weight+'lbs.'
			height1.innerHTML= 'Height:'+response.height+'inches'
			moveSymbol.style.backgroundImage= "url(images/water.png)"
			moveSymbol.style.backgroundRepeat = "no-repeat"
			moveSymbol.style.backgroundSize = "100% 100%"
			moveName.innerHTML = response.moves[getNum(1,response.moves.length-1)].move.name
			moveSymbol2.style.backgroundImage= "url(images/water.png)"
			moveSymbol2.style.backgroundRepeat = "no-repeat"
			moveSymbol2.style.backgroundSize = "100% 100%"
			moveName2.innerHTML = response.moves[getNum(1,response.moves.length-1)].move.name
			//
			//
			document.getElementById("doodoo").style.display= "block";
			document.getElementById('pokemonLogo').style.opacity= '.5'
		}
})
}

function newCard130(){
			pokeimage.style.backgroundImage = "url("+pokemon130.image+")"	
			pokeimage.style.backgroundRepeat = "no-repeat"
			pokeimage.style.backgroundSize = "100% 100%"
			image.style.backgroundImage ="url(images/background.jpg)"
			image.style.backgroundSize ='100% 100%'
			name1.innerHTML= pokemon130.name
			hp.innerHTML=''+pokemon130.hp+'HP'
			type.innerHTML=''+pokemon130.type+'Pokémon'
			weight1.innerHTML= 'Weight:'+pokemon130.weight+'lbs.'
			height1.innerHTML= 'Height:'+pokemon130.height+'inches'
			moveName.innerHTML = 'Attack:   '+pokemon130.attack
			moveName2.innerHTML ="Defense:   "+pokemon130.defense
			document.getElementById("doodoo").style.display= "block";
			document.getElementById('pokemonLogo').style.opacity= '.5'
		}

function newCard131(){
	pokeimage.style.backgroundImage = "url("+pokemon131.image+")"	
			pokeimage.style.backgroundRepeat = "no-repeat"
			pokeimage.style.backgroundSize = "100% 100%"
			image.style.backgroundImage ="url(images/background.jpg)"
			image.style.backgroundSize ='100% 100%'
			name1.innerHTML= pokemon131.name
			hp.innerHTML=''+pokemon131.hp+'HP'
			type.innerHTML=''+pokemon131.type+'Pokémon'
			weight1.innerHTML= 'Weight:'+pokemon131.weight+'lbs.'
			height1.innerHTML= 'Height:'+pokemon131.height+'inches'
			moveName.innerHTML = 'Attack:   '+pokemon131.attack
			moveName2.innerHTML ="Defense:   "+pokemon131.defense
			document.getElementById("doodoo").style.display= "block";
			document.getElementById('pokemonLogo').style.opacity= '.5'
		}


function newCard149(){
		pokeimage.style.backgroundImage = "url("+pokemon149.image+")"	
			pokeimage.style.backgroundRepeat = "no-repeat"
			pokeimage.style.backgroundSize = "100% 100%"
			image.style.backgroundImage ="url(images/background.jpg)"
			image.style.backgroundSize ='100% 100%'
			name1.innerHTML= pokemon149.name
			hp.innerHTML=''+pokemon149.hp+'HP'
			type.innerHTML=''+pokemon149.type+'Pokémon'
			weight1.innerHTML= 'Weight:'+pokemon149.weight+'lbs.'
			height1.innerHTML= 'Height:'+pokemon149.height+'inches'
			moveName.innerHTML = 'Attack:   '+pokemon149.attack
			moveName2.innerHTML ="Defense:   "+pokemon149.defense
			document.getElementById("doodoo").style.display= "block";
			document.getElementById('pokemonLogo').style.opacity= '.5'
		}




 function newCardByNum(aNumber){

	$.ajax({url:"https://fizal.me/pokeapi/api/"+aNumber+".json",
		success: function (response) {
			console.log(response)
			pokeimage.style.backgroundImage = "url(" +response.sprites.front_shiny+ ")"
			pokeimage.style.backgroundRepeat = "no-repeat"
			pokeimage.style.backgroundSize = "100% 100%"
			image.style.backgroundImage ="url(images/background.jpg)"
			image.style.backgroundSize ='100% 100%'
			name1.innerHTML= response.species.name
			hp.innerHTML=''+response.stats[5].base_stat+'HP'
			type.innerHTML=''+response.types[0].type.name+'Pokémon'
			weight1.innerHTML= 'Weight:'+response.weight+'lbs.'
			height1.innerHTML= 'Height:'+response.height+'inches'
			moveSymbol.style.backgroundImage= "url(images/water.png)"
			moveSymbol.style.backgroundRepeat = "no-repeat"
			moveSymbol.style.backgroundSize = "100% 100%"
			moveName.innerHTML = response.moves[getNum(1,response.moves.length-1)].move.name
			moveSymbol2.style.backgroundImage= "url(images/water.png)"
			moveSymbol2.style.backgroundRepeat = "no-repeat"
			moveSymbol2.style.backgroundSize = "100% 100%"
			moveName2.innerHTML = response.moves[getNum(1,response.moves.length-1)].move.name
			
			
			document.getElementById("doodoo").style.display= "block";
		}
})
}






// // $.ajax({url:"https://fizal.me/pokeapi/api/v2/id/131.json",
// // 		success: function (response2) {
// // 			console.log(response2)
// // 			image2.style.backgroundImage = "url(" +response2.sprites.front_default+ ")"
// // 			name2.innerHTML= response2.species.name
// // 			weight2.innerHTML= response2.weight 
// // 			height2.innerHTML= response2.height
			
// // 		}
// // 	})

// // $.ajax({url:"https://fizal.me/pokeapi/api/v2/id/149.json",
// // 		success: function (response3) {
// // 			console.log(response3)
// // 			image3.style.backgroundImage = "url(" +response3.sprites.front_default+ ")"
// // 			name3.innerHTML= response3.species.name
// // 			weight3.innerHTML= response3.weight
// // 			height3.innerHTML= response3.height
// // 		}
// // 	})




// // img.style.backgroundImage = "url(" + x.Poster + ")"
// // img.style.backgroundSize = "100% 100%";
// // movietitle.innerHTML= x.Title;
// // director.innerHTML= 'Directed by '+x.Director;''
// // year.innerHTML= x.Year;
// // plot.innerHTML= x.Plot;
// // rating.innerHTML= x.imdbRating;
// // actors.innerHTML= "staring " +x.Actors/*.split('')""*/;
// // document.body.style.backgroundImage= "url(" + x.female_front+ ")"
// // document.body.style.backgroundSize= '100% 100%'
// // document.body.style.backgroundRepeat= 'no-repeat'
// //}
// // }

// // var searchTitle = document.getElementById('searchTitle')
// // var submit= document.getElementById('submit')
// // var movietitle= document.getElementById('movietitle')
// // var director= document.getElementById('director')
// // var year= document.getElementById('year')
// // var plot= document.getElementById('plot')
// // var rating= document.getElementById('rating')
// // var actors= document.getElementById('actors')

// // submit.addEventListener('click', whatever)

// // function whatever(){
// // 	$.ajax({url:"http://www.omdbapi.com/?apikey=f5c2dd8e&",
// // 		data: {t:searchTitle.value},
// // 		success: function (response) {
// // 			console.log(response)
// // 			hookImage(response)
			
// // 		}
// // 	})
// // }


// // function hookImage(x


// // class Pokemon{
// //     constructor(ajaxNumber){
// //         this.name;
// //         this.hp;
// //         this.attack;
// //         this.defense;
// //         this.abilities = [];
// //         this.getPokemon(ajaxNumber);
// //     }
// //     getPokemon(ajaxNumber){
// //         var that = this
// //         $.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
// //         success: function(result){
// //                     that.hp = that.getHP(result)
// //                     that.attack = that.getAttack(result);
// //                     that.defense = that.getDefense(result);
// //                     that.abilities = that.getAbilities(result);
// //                     that.name = that.getName(result);
// //                 }    
// //         })
// //     }
// //     getName(result){
// //         //sends a name
// //         return result.name
// //     }
// //     getHP(result){
// //         return result.stats[5].base_stat
// //     }
// //     getAttack(result){
// //         return result.stats[4].base_stat
// //     }
// //     getDefense(result){
// //         return result.stats[3].base_stat
// //     }
// //     getAbilities(result){
// //         let abilityArray = [];
// //         for(let i = 0 ; i< result.abilities.length;i++){
// //             abilityArray.push(result.abilities[i].ability.name)
// //         }
// //         return abilityArray;
// //     }            
// // }
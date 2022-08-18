

const family = ["Baby Shark", "Mommy Shark", "Daddy Shark", "Grandma Shark", "Grandpa Shark", "Let's go hunt", "Run away", "Safe at last", "It's the end"]

const sentences = family.map(x => `${x} doo doo doo doo doo doo`)
for(let i=0; i < sentences.length; i++){
	for(let j=0; j < 4; j++){
		console.log(`${sentences[i]}`)
		if(j == 3){
			console.log(`${family[i]}!`)
			break;
		}
	}
}

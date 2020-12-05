

function counterUp(){
	let number = document.getElementById('number');
	numberUp = parseInt(number.innerHTML);
	if (numberUp==99){
		maxReach();
	}
	else{
		numberUp+=1;
		number.innerHTML = numberUp;
	}
}

function counterDown() {
	let number = document.getElementById('number');
	numberDown = parseInt(number.innerHTML);
	if (numberDown==0){
		maxReach();
		
	}
	else{
		numberDown-=1;
		number.innerHTML = numberDown;
	}

}

function maxReach() {
	let element = document.querySelector('h1');
	element.classList.add("animate__animated", "animate__headShake");
	setTimeout(() => {
		element.classList.remove("animate__animated", "animate__headShake");
	},900);
	
}


const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
plus.addEventListener('click', counterUp);
minus.addEventListener('click', counterDown);
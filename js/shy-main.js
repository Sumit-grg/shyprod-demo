const backGoundChange = document.getElementById('home');

const bkPhotos =[
	"../img/6.png",
	"../img/as5.png",
	"../img/25.png",
	"../img/as1.png",
	"../img/3.png",
	"../img/as2.png",
	"../img/5.png",
	"../img/as4.png",
	"../img/as3.png",
	'../img/14.png',
]

let currentIndex = 0;
	function changeBackground() {
		const imageUrl = bkPhotos[currentIndex];
		backGoundChange.style.backgroundImage = `url('${imageUrl}')`;
		currentIndex = (currentIndex + 1) % bkPhotos.length;

	}

	changeBackground();

	setInterval(changeBackground, 3000);

// const backGoundChange = document.getElementById('home-bk');

// const bkPhotos =[
// 	'../img/14.png',
// 	"../img/as1.png",
// 	"../img/5.png",  
// ]

// let currentIndex = 0;

// function changeBackground() {
// 	const imageUrl = bkPhotos[currentIndex];
// 	backGoundChange.innerHTML = `<img src="${imageUrl}" alt="">`;
// 	currentIndex = (currentIndex + 1) % bkPhotos.length;
// }

// 	changeBackground();

// 	setInterval(changeBackground, 5000);

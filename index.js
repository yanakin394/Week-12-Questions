//1. '' "" ``, принц.разница в том, что в косых кавычках мы можем записывать данные в столбик.
/* 2. Метод slice или substring или substr.
	Метод substr:
		const dragons = 'Drogon, Rhaegal, Viserion';
		const res = dragons.sbstr(8, 7); // Rhaegal, в первом параметре в скобках указываем начальный индекс, потом длину.

	Метод substring:
 		const dragons = 'Drogon, Rhaegal, Viserion';
		const res = dragons.substring(0, 6); //Drogon (старт, конец)

	Метод slice*/
		const dragons = 'Drogon, Rhaegal, Viserion ';
		const res = dragons.slice(17, -1);
		console.log(res); //Viserion 

//3. \n нужен для переноса строки.
//4. 
    const txt = 'настя';
    console.log(txt);
    const change = txt.replace('н', 'Н');
    console.log(change);
        //или сложнее
    const nm = 'настя';
    console.log(nm);
    const firstCharacter = nm.substr(0, 1);
    const characterChange = nm.replace(firstCharacter, firstCharacter.toUpperCase());    
    console.log(characterChange);
//5. .round
//6. я еще использовала другие штуки, чтобы потренироваться =)
const somenumber = Math.ceil(Math.random() * 100);
console.log(somenumber);
//7. 6
//8. ВЕЛОСИПЕД
//9. "Красивые такие розы"
//10. (2,3):cde
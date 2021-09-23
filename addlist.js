let nameList = confirm("Você deseja adicionar alguém?");
let nameAdd;
let list = []

if (nameList) {
		while(nameList) {
				nameAdd = prompt("Quem você deseja adicionar?");
				nameList = confirm("Você deseja adicionar mais alguém?");
				list.push(nameAdd);
		}
}

list.forEach(function(v,i) {
		console.log("Nome do convidado: " + v + "\nPosição na lista: " + i);
})
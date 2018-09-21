let a1 = $("#a1");
let b1 = $("#b1");
let c1 = $("#c1");
let a2 = $("#a2");
let b2 = $("#b2");
let c2 = $("#c2");



$("#submit").click(function(e) {
	e.preventDefault();
	let A1 = Number(a1.val());
	let A2 = Number(a2.val());
	let B1 = Number(b1.val());
	let B2 = Number(b2.val());
	let C1 = Number(c1.val());
	let C2 = Number(c2.val());
	
	let divide = ((A1 * B2) - (A2 * B1));
	let X = ((B1 * C2) - (B2 * C1)) / divide;
	let Y = ((A1 * C2) - (A2 * C1)) / divide;
	let answer;
	if(X == Infinity || X == -Infinity)
	{
		answer = "No solution.";
	}
	else {
		answer = "X = " + X + "; \n Y = " + Y;
	}
	if(answer.search("NaN") !== -1)
	{
		answer = "Infinitely many solutions exist.";
	}
	$('#answer').text(answer);
})

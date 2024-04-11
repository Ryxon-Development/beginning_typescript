
//Literal type
type Result = "Head"|"Tail";

const FlipCoin = (): Result => {
    return Math.random() < 0.5 ? "Head" : "Tail";
}

console.log(FlipCoin());


//Enums
enum Suit {
    Clubs='♣️',
    Diamonds='♦️',
    Hearts='♥️',
    Spades='♠️'
}
console.log({'suits':Suit});
console.log(Suit.Clubs);
console.log(Suit.Diamonds);
console.log(Suit.Hearts);
console.log(Suit.Spades);
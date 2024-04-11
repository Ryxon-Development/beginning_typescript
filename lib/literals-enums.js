"use strict";
const FlipCoin = () => {
    return Math.random() < 0.5 ? "Head" : "Tail";
};
console.log(FlipCoin());
var Suit;
(function (Suit) {
    Suit["Clubs"] = "\u2663\uFE0F";
    Suit["Diamonds"] = "\u2666\uFE0F";
    Suit["Hearts"] = "\u2665\uFE0F";
    Suit["Spades"] = "\u2660\uFE0F";
})(Suit || (Suit = {}));
console.log({ 'suits': Suit });
console.log(Suit.Clubs);
console.log(Suit.Diamonds);
console.log(Suit.Hearts);
console.log(Suit.Spades);
//# sourceMappingURL=literals-enums.js.map
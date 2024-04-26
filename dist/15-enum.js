"use strict";
//Enum -------------------------------------
//Initial value 0,1,2,...
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Easy"] = 0] = "Easy";
    GameMode[GameMode["Medium"] = 1] = "Medium";
    GameMode[GameMode["Hard"] = 2] = "Hard";
})(GameMode || (GameMode = {}));
const select = GameMode.Easy;
console.log(select);
//with assigned value
var GameModeValue;
(function (GameModeValue) {
    GameModeValue[GameModeValue["Easy"] = 10] = "Easy";
    GameModeValue[GameModeValue["Medium"] = 20] = "Medium";
    GameModeValue[GameModeValue["Hard"] = 30] = "Hard";
})(GameModeValue || (GameModeValue = {}));
const select2 = GameModeValue.Medium;
console.log(select2);
//with string value
var GameModeDescripe;
(function (GameModeDescripe) {
    GameModeDescripe["Easy"] = "easy";
    GameModeDescripe["Medium"] = "medium";
    GameModeDescripe["Hard"] = "hard";
})(GameModeDescripe || (GameModeDescripe = {}));
const select3 = GameModeDescripe.Hard;
console.log(select3);

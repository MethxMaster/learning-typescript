//Enum -------------------------------------

//Initial value 0,1,2,...
enum GameMode{
    Easy,
    Medium,
    Hard
}
const select : GameMode = GameMode.Easy
console.log(select)

//with assigned value
enum GameModeValue{
    Easy=10,
    Medium=20,
    Hard=30
}
const select2:GameModeValue = GameModeValue.Medium
console.log(select2)

//with string value

enum GameModeDescripe{
    Easy='easy',
    Medium='medium',
    Hard='hard'
}
const select3:GameModeDescripe = GameModeDescripe.Hard
console.log(select3)
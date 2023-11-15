// Variable Declarations: const, let, and var

              // var (localscope,value can reassigned)
// {
//     var checkVar = "Var is";
//     {
//         checkVar = "Var can be reassigned";
//         console.log(checkVar); // Can be accessed everywhere (scope is local and can be changed)
//         // Var can be reassigned
//     }
// }

                      // let
// {
//     let checkLet = "let is"; (Blockscope,value can reassigned)
//     {
//         checkLet = "let can be reassigned";
//         console.log(checkLet); // Can be accessed in the same block (scope is global and can be changed)
//         // Let can be reassigned
//     }
// }

                   // const (Blockscope,value cant reassigned)
// { 
//     const checkConst = "Const is";
//     {
//         // This will throw an error because const cannot be reassigned
//         // checkConst = "will throw an error because it can't be reassigned";
//         console.log(checkConst); // Can be accessed in the same block (scope is global and can't be changed)
//         // Error
//     }
// }

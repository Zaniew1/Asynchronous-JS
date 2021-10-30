// Callbacki z osobnymi funkcjami 

// const first = (callbackFunction)=>{
//     console.log('preparing to first function');
//     setTimeout(callbackFunction, 1000)
// }

// const second = (callbackFunction) =>{
//     console.log('preparing for second function')
//     setTimeout(callbackFunction, 2000)
// }
// const third = (callbackFunction)=>{
//     console.log('preparing for third function ')
//     setTimeout(callbackFunction, 3000)
// }

// first(()=>{
//     console.log('first function')
//     second(()=>{
//         console.log('second fucntion')
//         third(()=>{
//             console.log('third function')
//         })
//     })
// });
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//Callbacki  w jednej funkcji
//     const all = ()=>{
//         console.log('preparing for first function')
//         setTimeout(()=>{
//             console.log('first function')
//             console.log('preparing for second function')
//             setTimeout(()=>{
//                 console.log('second function')
//                 console.log('preparing for third function')
//                 setTimeout(()=>{
//                     console.log('third function')
//                 }, 3000)
//             },2000)
//         },1000)
//     }



// all()
//  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



// Zadanie na callbacki z Samuraja


    // const doJob = (hours, clb)=>{
    //     if(hours > 8){
    //         clb(new Error('coś nie tak '))
    //     }
    //     else{
    //         setTimeout(()=>{
    //             clb(null)
    //         },(hours*1000))
    //     }
    // }
    // const pay = (clb)=>{
    //     clb(null)
    // }
    // doJob( 5, err=>{
    //     if(err === null){
    //         console.log('zadanie skończone')
    //         pay(()=>{
    //             console.log('zapłata poszła')
    //         })
    //     }
    //     else {
    //         console.log('błąd', err)
    //     }
    // })
// ta sama funkcja z użyciem promisów 
//     const doJob = (hours) =>{
//         return new Promise ((resolve, reject)=>{
//             if(hours > 8){
                
//                 reject(new Error('no i chuj'))
//             }
//             else{
//                 setTimeout(()=>{
//                     resolve()
//                 }, hours*1000)
                
//             }
//         })
//     }

//     const pay = () => {
//         return new Promise (resolve =>  resolve())
//     }

// doJob()
//     .then(()=>{
//         console.log('zadanie skończone')
//         return pay()
//     })
//     .then(()=>{
//         console.log('Wypłata poszła')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })









//Promisy 


// const first = ()=>{
//     console.log('preparing to first function');
//     return new Promise ((resolve, reject)=>{
//         setTimeout(resolve, 1000)

//     })
// }
// const second = ()=>{
//     console.log("preparing for second function");
//     return new Promise ((resolve, reject)=>{
//         setTimeout(resolve, 2000)
//     })
// }
// const third = ()=>{
//     console.log('preparing for third function')
//     return new Promise ((resolve, reject)=>{
//         setTimeout(resolve, 3000)
//     })
    
// }

// first()
//     .then(()=>{
//         console.log('first function')
//         return second();
//     })
//     .then(()=>{
//         console.log('second function')
//         return third()
//     })
//     .then(()=>{
//         console.log('third function')
//     })
//     .catch((error)=>{
//         console.log(new Error('coś nie działa'), error )
//     })
//     .finally(()=>{
//         console.log('main function')
//     })

// ||||||||||||||||||||||||||||||||||||||||||||
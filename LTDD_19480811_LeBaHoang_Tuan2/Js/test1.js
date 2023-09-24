const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
function getData(){$.ajax({method : "GET", url : urlBacon, dataType :"json"})

        .done(function (data){console.log(data);})
        .fail(function(){ alert("no goood");});


    }
    function getData1(){$.ajax({method : "GET", url : urlBacon, dataType :"json"})

    .done(function (data){console.log(data);})
    .fail(function(){ alert("no goood");});


    }
    getData1();
    
    getData();


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 1 đã hoàn thành');
//     }, 2000);
//   });
  
//   promise1.then(result => {
//     console.log(result);
//   }).catch(error => {
//     console.error('error');
//   });

//   const promise2 = new Promise((resolve, reject) => {
//     const a = 5;
//     const b = 10;
  
//     setTimeout(() => {
//       const sum = a + b;
//       resolve(`Tổng của ${a} và ${b} là ${sum}`);
//     }, 1000);
//   });
  
//   promise2.then(result => {
//     console.log(result);
//   }).catch(error => {
//     console.error(error);
//   });
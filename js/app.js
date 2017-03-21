angular
  .module('movieApp',[])
  .controller('movieController', movieController);

  function movieController(){
    var vm=this;

    vm.moviesToWatch =[
        {
          name: 'Logan',
          genre: 'Action'
        },
        {

          name: 'Moana',
          genre: 'Animated'
        },
        {

          name: 'Fences',
          genre: 'Drama'
        },
        {

          name: 'Hidden Figures',
          genre: 'Drama'
        },
        {

          name: 'Moonlight',
          genre: 'Drama'
        },
        {

        name: 'John Wick 2',
        genre: 'Action'
      }

    ];
    console.log(vm);
    newMovie = {};
    vm.addMovie = function(m,g){
      var newMovie = {name:m,genre:g}
      vm.moviesToWatch.push(newMovie);
      var newMovie ={};
    };
    
  };

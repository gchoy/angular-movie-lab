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
  };

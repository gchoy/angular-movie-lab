angular
  .module('movieApp',[]);
  .controller('movieController', movieController);

  function movieController(){
    var vm=this;

    vm.moviesTowatch =[
        {
          id: 1,
          name: 'Logan',
          genre: 'Action'
        },
        {
          id: 2,
          name: 'Moana',
          genre: 'Animated'
        },
        {
          id: 3,
          name: 'Fences',
          genre: 'Drama'
        },
        {
          id: 4,
          name: 'Hidden Figures',
          genre: 'Drama'
        },
        {
          id: 5,
          name: 'Moonlight',
          genre: 'Drama'
        },
        {
          id: 6,
          name: 'John Wick 2',
          genre: 'Action'
        }

    ];
    console.log(vm);
  };

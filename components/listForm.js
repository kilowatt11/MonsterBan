;(function(){

  angular.module('monsterBan')
  .component('listForm', {
      templateUrl: 'templates/listForm.html',
      controller: ListFormController,
      controllerAs:'lf',
      bingings: {
                lists: '<'
            },
            require: {
                board: '^storyBoard'
            }
  })

  function ListFormController(){
      var lf = this
      
      var x = lf.lists
      lf.add = function(form){
          debugger
            lf.board.addList(form)
        }


  }

}());
;(function () {
    angular.module('monsterBan')
        .component('storyBoard', {

            templateUrl: 'templates/storyBoard.html',
            controller: storyBoardController,
            controllerAs: 'sb'
        })
        storyBoardController.$inject = [];

    function storyBoardController() {
        
        var sb = this;
        sb.lists = [
            {name:'ToDo', cards:[{name: 'whatever', stories: [{name: 'login stuff', description:'As a user I would....'}]}]},
            {name:'In Progress', cards:[{name: 'something', stories: [{name: 'Display Bug', description:'As a user I would....'}]}]},
            {name:'Finished', cards:[{name: 'The Hell', stories: [{name: 'Crap is Broken', description:'As a user I am angry....'}]}]}
        ];
        sb.deleteList = function(list){
            debugger; 
           sb.lists = sb.lists.filter(function(item){
                return item != list;
            })
        }
        sb.addList = function(){

        }
    

    }
    
} ())
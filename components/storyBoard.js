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
            'ToDo',
            'In Progress',
            'Done'
        ];
        sb.deleteList = function(list){
            sb.lists = sb.lists.filter(function(item){
                return item != list;
            })
        }

    }
    
} ())
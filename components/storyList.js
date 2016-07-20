debugger;
;(function () {
    angular.module('monsterBan')
        .component('storyList', {
            templateUrl: 'templates/storyList.html',
            controller: storyListController,
            controllerAs: 'sl',
            bindings: {
                list: '<'
            },
            require: {
                board: '^storyBoard'
            }
        })


    function storyListController() {
        var sl = this
        sl.cards = [
            'merge',
            'copy',
            'delete',
        ];

        sl.$onInit = function () {
           
            console.log('Lists: ', sl.board.lists);
        };
        sl.delete = function(){
            sl.board.deleteList(sl.list)

        }

    }
} ())
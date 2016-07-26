
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
      

        sl.$onInit = function () {
           
            console.log('Lists: ', sl.board.lists);
        };

       sl.delete = function(){
            sl.board.deleteList(sl.list)

        }
        

        sl.moveCard = function(card, listName){
           
            console.log(sl.board.lists)
            for(var i = 0;i < sl.board.lists.length ;i++){
                var currentList = sl.board.lists[i]
                console.log(currentList.name)
                if(currentList.name == listName){
                    currentList.cards.push(card)
                }
            }
        }

        sl.removeCard = function(card){
           
            for(var i = 0; i< sl.board.lists.length; i ++){
                var currentList = sl.board.lists[i];
                for(var j = 0; j< currentList.cards.length;j++){
                    var currentCard = currentList.cards[j]
                    if (currentCard.name == card.name) {
                        return currentList.cards.splice(j, 1)
                    }
                }
            }
        }
    }
} ())
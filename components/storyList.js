
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
        sl.moveCard = function(card, x){
            debugger;
            
            console.log(sl.board.lists)
            for(var i = 0;i < sl.board.lists.length ;i++){
                var currentList = sl.board.lists[i]
                console.log(currentList.name)
                if(currentList.name == x){
                    currentList.cards.push(card)
                }
            }
        }
        sl.removeCard = function(card){
           debugger;
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


;(function () {

    angular.module('monsterBan')
        .component('storyCard', {
            templateUrl: 'templates/storyCard.html',
            controller: storyCardController,
            controllerAs: 'sc',
            bindings: {
                card: '<'
            },
            require: {
                list: '^storyList'
            }
        })


    function storyCardController() {
        var sc = this
    
        
        sc.$onInit = function () {
           
            // console.log('Cards: ', sc.list.cards);
        };
        sc.delete = function(){
            sc.list.deleteCard(sc.card)

        }
        sc.moveCard = function(card){
            for(var i = 0;i < sb.lists;i++){
                var currentCard = sb.list[i]

            }


        }

    }
} ())
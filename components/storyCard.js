

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
        sc.move = function(x){
          
            sc.list.removeCard(sc.card)
            sc.list.moveCard(sc.card, x)

        }
        sc.delete = function(){
            sc.list.removeCard(sc.card)
        }
        

    }
} ())
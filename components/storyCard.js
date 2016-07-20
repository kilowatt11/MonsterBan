

;(function () {
    debugger;
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
        debugger;
        
        sc.$onInit = function () {
           
            console.log('Cards: ', sc.list.cards);
        };
        // sc.delete = function(){
        //     sc.story.deleteList(sc.story)

        // }

    }
} ())
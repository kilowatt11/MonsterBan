; (function () {

    angular.module('monsterBan')
        .component('storyForm', {
            templateUrl: 'templates/storyForm.html',
            controller: StoryFormController,
            controllerAs: 'sf',
            bingings: {
                lists: '<'
            },
            require: {
                board: '^storyBoard'
            }
        })

    function StoryFormController() {
        var sf = this;
        //   console.log(lists)

        sf.addCard = function (card) {
            
            
            var list = sf.board.lists
            for (var i = 0; i < list.length; i++) {
                var currentList = list[i];
                console.log(currentList.cards)
                if(currentList.name == "To-Do"){
                    currentList.cards.push(card)
                    return;
                }
            }
            sf.addCard = {};
        }
    }

} ());
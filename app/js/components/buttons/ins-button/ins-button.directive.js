'use strict';

var componentsModule = require('../../');

function insButton() {
    return {
        scope: {
            color: '@',
            type: '@',
            size: '@'
        },
        transclude: true,
        templateUrl: 'js/components/buttons/ins-button/ins-button.html',
        restrict: 'E',
        replace: true
    };
}

componentsModule.directive('insButton', insButton);
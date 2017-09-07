/*global window, require*/
'use strict';

const servicesModule = require('./');
const URI = require('urijs');
const Jwt = require('jwt-redhat').default;
/**
 * @ngInject
 */
function BounceService(InsightsConfig, $injector) {
    return {
        bounce: function () {
            if (InsightsConfig.authenticate) {
                Jwt.login();
            }
        }
    };

    // The evaluation state tracks the original state the user wanted
    // to go. This prevents that information from being lost
    // during a redirect.
    function getOriginalDestination() {
        const $state = $injector.get('$state');
        const originalPath = $state.params.originalPath;
        if (originalPath) {
            return originalPath;
        }

        const redirectUri = URI(window.location.toString());
        const basePath = redirectUri.segment()[0];
        redirectUri.segment([basePath, 'overview']);
        return redirectUri.toString();
    }
}

servicesModule.service('BounceService', BounceService);

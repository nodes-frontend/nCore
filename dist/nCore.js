/**
 * The nCore.
 * @version v1.0.0 - 2015-05-18
 * @link https://github.com/nodes-galactic/nCore
 * @author Dennis Haulund Nielsen
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
	'use strict';

	angular.module('nCore', [
		'nCore.nLogger',
		'nCore.nMessages',
		'nCore.nExceptionHandler',
		'nCore.nHttpInterceptor'
	]);

})();


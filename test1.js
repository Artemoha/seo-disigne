(function() {
	'use strict';

	BX.namespace('BX.Sale.BasketComponent');

	BX.Sale.BasketComponent = {
		maxItemsShowCount: 30,
		precisionFactor: Math.pow(10, 6),
		stickyHeaderOffset: 0,

		duration: {
			priceAnimation: 300,
			filterTimer: 300
		}

'use strict';

var locations = [];

function MakeLocation(location, min, max, avg) {
    this.storeName = location;
    this.minCustPerHour = min;
    this.maxCustPerHour = max;
    this.avgNumSoldPerCust = avg;
    this.storeHours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    this.randCustomers = [];
    this.cookiesPerHour = [];
    this.totalCookiesSold = 0;
    locations += locations.push(this);
}


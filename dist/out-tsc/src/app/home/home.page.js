import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.login = function () {
        console.log("username: " + this.username);
        console.log("password: " + this.password);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        })
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map
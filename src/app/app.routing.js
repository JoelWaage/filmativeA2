"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home.component");
var films_component_1 = require("./components/films.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'films',
        component: films_component_1.FilmsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
System.register(['angular2/core', 'angular2/router', './component/home.component', './component/about.component', './component/image.component', './component/image.list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, about_component_1, image_component_1, image_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (image_component_1_1) {
                image_component_1 = image_component_1_1;
            },
            function (image_list_component_1_1) {
                image_list_component_1 = image_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    router_1.RouteConfig([
                        {
                            path: "/home",
                            name: "Home",
                            component: home_component_1.homeComponent,
                            useAsDefault: true
                        },
                        {
                            path: "/about",
                            name: "About",
                            component: about_component_1.aboutComponent
                        },
                        {
                            path: "/image",
                            name: "Image",
                            component: image_component_1.imageComponent
                        },
                        {
                            path: "/imagelist",
                            name: "ImageList",
                            component: image_list_component_1.imageListComponent
                        }
                    ]),
                    core_1.View({
                        templateUrl: 'app/views/navigation.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
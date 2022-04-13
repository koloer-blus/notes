class VerifyRouter {
    constructor(routes, {
        whiteMap,
        blockMap
    }) {
        if (!Array.isArray(routes)) {
            throw new Error("The routes of params must be the type of Array!");
        }
        this.user = user;
        this.routes = routes;
        this.whiteMap = whiteMap;
        this.blockMap = blockMap;
    }

    verifyIdentity(userIdentity, to, next) {
        if (!userIdentity) {
            next({
                path: '/login'
            })
        }
        if (!this.checkHasAuth(to, userIdentity)) {
            if (to.redirectPath) {
                next({
                    path: to.redirectPath
                });
            }
        }
        next();
    }

    isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }

    isGlobalInclude(map, user, route) {
        return !!(this.isObject(map) && this.isArray(map[user]) && (map[user].includes(route.name) || map[user].includes(route.path)));
    }
    isRouteInclude(user, list) {
        return !!(this.isArray(list) && list.includes[user])
    }

    checkHasAuth(route, userIdentity) {
        if (this.isRouteInclude(userIdentity, route.whiteList)) {
            return true;
        } else if (this.isRouteInclude(userIdentity, route.blockList)) {
            return false;
        } else if (this.isRouteInclude(userIdentity, route)) {
            return true;
        } else if (this.isRouteInclude(userIdentity, route)) {
            return false;
        } else {
            return true;
        }
    }

    getRoutesList(userIdentity) {
        return this.routes.reduce((newRoute, route) => {
            if (this.checkHasAuth(route, userIdentity)) {
                const tempRoute = route;
                if (this.isArray(route.children)) {
                    tempRoute.children = tempRoute.children.filter(cRoute => this.checkHasAuth(cRoute, userIdentity));
                }
                newRoute.push(tempRoute);
            }
            return newRoute;
        }, []);
    }
}
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const models_1 = __importDefault(require("./models"));
const FilterController_1 = require("./controller/FilterController");
const FilterRouter_1 = require("./route/FilterRouter");
const Route_1 = require("./constant/Route");
class App {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const app = (0, express_1.default)();
                yield this.registerHandlersAndRoutes(app);
                yield models_1.default.sequelize.sync();
                const PORT = 8000;
                app.listen(PORT, () => {
                    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    registerHandlersAndRoutes(app) {
        return __awaiter(this, void 0, void 0, function* () {
            app.use(body_parser_1.default.json());
            app.get('/', (req, res) => res.send('Hello World'));
            const filterController = new FilterController_1.FilterController();
            const filterRouter = new FilterRouter_1.FilterRouter(filterController);
            app.use(Route_1.Route.FILTERS, filterRouter.getRoutes());
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map
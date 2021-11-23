"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterRouter = void 0;
const express_1 = __importDefault(require("express"));
class FilterRouter {
    constructor(filterController) {
        this.filterRouter = express_1.default.Router();
        this.filterController = filterController;
    }
    getRoutes() {
        this.filterRouter.get('/muscleGroups', this.filterController.getAllMuscleGroups);
        return this.filterRouter;
    }
}
exports.FilterRouter = FilterRouter;
//# sourceMappingURL=FilterRouter.js.map
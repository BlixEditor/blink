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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var crypto = require("crypto");
var pixi_js_1 = require("pixi.js");
function getUUID() {
    return crypto.randomBytes(32).toString("base64url");
}
var nodes = {
    "inputSprite": function (context) {
        var nodeBuilder = context.instantiate(context.pluginId, "inputSprite");
        nodeBuilder.setTitle("Blink Image");
        nodeBuilder.setDescription("Input a Blink Sprite Image");
        var ui = nodeBuilder.createUIBuilder();
        ui.addFilePicker({
            componentId: "imagePicker",
            label: "Pick an image",
            defaultValue: "",
            triggerUpdate: true
        }, {});
        ui.addBuffer({
            componentId: "state",
            label: "State Buffer",
            defaultValue: { id: null },
            triggerUpdate: true
        }, {});
        nodeBuilder.setUIInitializer(function (x) {
            console.log("UI INITIALIZER", x);
            return {
                state: {
                    id: getUUID()
                }
            };
        });
        nodeBuilder.define(function (input, uiInput, from) { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                return [2 /*return*/, {
                        assets: (_a = {},
                            _a[uiInput["id"]] = {
                                "class": "asset",
                                type: "image",
                                data: uiInput["imagePicker"].split("/").splice(-2).join("/")
                            },
                            _a),
                        content: {
                            "class": "clump",
                            name: "root",
                            transform: new pixi_js_1.Matrix(),
                            filters: [
                                { "class": "filter", type: "blur", params: [100, 25] },
                                // { class: "filter", type: "noise", params: [10] },
                                // { class: "filter", type: "color", params: [] },
                            ],
                            elements: [
                                {
                                    "class": "atom",
                                    type: "image",
                                    assetId: uiInput["id"]
                                }
                            ]
                        }
                    }];
            });
        }); });
        nodeBuilder.setUI(ui);
        nodeBuilder.addInput("Blink matrix", "transform", "Transform");
        nodeBuilder.addOutput("Blink image", "res", "Result");
    },
    "matrix": function (context) {
        var nodeBuilder = context.instantiate(context.pluginId, "matrix");
        nodeBuilder.setTitle("Matrix");
        nodeBuilder.setDescription("Construct a Blink matrix");
        var ui = nodeBuilder.createUIBuilder();
        ui.addSlider({
            componentId: "number",
            label: "Input number",
            defaultValue: 0,
            triggerUpdate: true
        }, { min: -100, max: 100, set: 0.1 });
        nodeBuilder.define(function (input, uiInput, from) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        "res": {}
                    }];
            });
        }); });
        nodeBuilder.setUI(ui);
        nodeBuilder.addInput("vec2", "translation", "Translation");
        nodeBuilder.addInput("number", "rotation", "Rotation");
        nodeBuilder.addInput("vec2", "scale", "Scale");
        nodeBuilder.addOutput("Blink matrix", "res", "Result");
    }
};
var commands = {};
var tiles = {};
function init(context) {
    var glfxTypeBuilder = context.createTypeclassBuilder("Blink image");
    glfxTypeBuilder.setToConverters({
        "image": function (value) { return ({}); }
    });
    glfxTypeBuilder.setFromConverters({
        "image": function (value) { return ({}); }
    });
    glfxTypeBuilder.setDisplayConfigurator(function (data) {
        return {
            displayType: "webview",
            props: {
                renderer: "".concat(context.pluginId, "/blinkRenderer"),
                media: null
            },
            contentProp: "media"
        };
    });
}
module.exports = {
    nodes: nodes,
    commands: commands,
    tiles: tiles,
    init: init
};

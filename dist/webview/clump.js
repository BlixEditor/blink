"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.canvas1 = exports.getPixiFilter = void 0;
var PIXI = require("pixi.js");
var pixi_js_1 = require("pixi.js");
function getPixiFilter(filter) {
    var _a, _b;
    switch (filter.type) {
        case "blur": return new ((_a = PIXI.BlurFilter).bind.apply(_a, __spreadArray([void 0], filter.params, false)))();
        case "noise": return new ((_b = PIXI.NoiseFilter).bind.apply(_b, __spreadArray([void 0], filter.params, false)))();
        case "color": return new PIXI.ColorMatrixFilter();
    }
}
exports.getPixiFilter = getPixiFilter;
exports.canvas1 = {
    assets: {
        "1": {
            "class": "asset",
            type: "image",
            data: "media/bird.png"
        },
        "2": {
            "class": "asset",
            type: "image",
            data: "media/blueArrow.png"
        }
    },
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
                assetId: "1"
            },
            {
                "class": "clump",
                name: "clump1",
                transform: new pixi_js_1.Matrix().translate(500, 500),
                elements: [
                    {
                        "class": "atom",
                        type: "shape",
                        shape: "rect",
                        fill: 0xff0000,
                        stroke: 0x00ff00,
                        strokeWidth: 5
                    },
                    {
                        "class": "atom",
                        type: "text",
                        text: "Hello World",
                        fill: 0x0000ff,
                        stroke: 0x00ff00,
                        strokeWidth: 5,
                        fontSize: 20,
                        fontFamily: "Arial",
                        fontStyle: "italic",
                        fontWeight: "bold",
                        textAlign: "center",
                        textBaseline: "middle"
                    },
                    {
                        "class": "atom",
                        type: "image",
                        assetId: "2"
                    },
                ]
            },
        ]
    }
};

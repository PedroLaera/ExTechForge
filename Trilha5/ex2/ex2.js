/*Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos
addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para
objetos com TypeScript.

Crie duas subclasses WarehouseInventory e StoreInventory.
WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());
var WarehouseInventory = /** @class */ (function (_super) {
    __extends(WarehouseInventory, _super);
    function WarehouseInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inventory = {};
        return _this;
    }
    WarehouseInventory.prototype.addItem = function (item, quantity) {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        }
        else {
            this.inventory[item] = quantity;
        }
        console.log("Adicionando ".concat(quantity, " de ").concat(item, " ao inventory"));
    };
    WarehouseInventory.prototype.removeItem = function (item) {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log("Item ".concat(item, " removido do inventario"));
        }
        else {
            console.log("Item ".concat(item, " n\u00E3o encontrado no inventario"));
        }
    };
    WarehouseInventory.prototype.getInventory = function () {
        return this.inventory;
    };
    return WarehouseInventory;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inventory = {};
        _this.maxQuantityPerItem = 10;
        return _this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        if (this.inventory[item]) {
            if (this.inventory[item] + quantity > this.maxQuantityPerItem) {
                console.log("N \u00E9 possivel add ".concat(quantity, " de ").concat(item, ". Limit de ").concat(this.maxQuantityPerItem, " unid. atingido."));
                return;
            }
            this.inventory[item] += quantity;
        }
        else {
            if (quantity > this.maxQuantityPerItem) {
                console.log("N \u00E9 possivel add ".concat(quantity, " de ").concat(item, ". Limit de ").concat(this.maxQuantityPerItem, " unid. atingido."));
                return;
            }
            this.inventory[item] = quantity;
        }
        console.log("foi Add ".concat(quantity, " de ").concat(item, " ao inventario."));
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log("Item ".concat(item, " removido do inventario ."));
        }
        else {
            console.log("Item ".concat(item, " n encontrado no invent\u00E1rio."));
        }
    };
    StoreInventory.prototype.getInventory = function () {
        return this.inventory;
    };
    return StoreInventory;
}(Inventory));
var warehouse = new WarehouseInventory();
warehouse.addItem("Mesa", 20);
warehouse.addItem("Cadeira", 30);
console.log("Inventario:", warehouse.getInventory());
var store = new StoreInventory();
store.addItem("Cadeira", 5);
store.addItem("Cadeira", 6);
store.addItem("Mesa", 10);
store.addItem("Mesa", 2);
console.log("Inventario da loja:", store.getInventory());

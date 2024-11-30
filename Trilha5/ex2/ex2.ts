/*Crie uma classe abstrata Inventory que gerencie um inventário de itens. Ela deve ter métodos abstratos 
addItem(item: string, quantity: number): void, removeItem(item: string): void e getInventory(): Record<string, number>. Dica: ver tipagem com Record para 
objetos com TypeScript.

Crie duas subclasses WarehouseInventory e StoreInventory.
WarehouseInventory deve ter a capacidade de armazenar quantidades grandes e controlar os itens de forma genérica.
StoreInventory deve ter um limite de quantidade por item (máximo 10 unidades) e impedir que itens ultrapassem esse limite.
Ambos os inventários devem retornar uma lista de itens com suas quantidades disponíveis.*/

abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;

    abstract removeItem(item: string): void;

    abstract getInventory(): Record<string, number>;
}
class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
        console.log(`Adicionando ${quantity} de ${item} ao inventory`);
    }
    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log(`Item ${item} removido do inventario`);
        } else {
            console.log(`Item ${item} não encontrado no inventario`);
        }
    }
    getInventory(): Record<string, number> {
        return this.inventory;
    }
}
class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};
    private readonly maxQuantityPerItem: number = 10;

    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            if (this.inventory[item] + quantity > this.maxQuantityPerItem) {
                console.log(`N é possivel add ${quantity} de ${item}. Limit de ${this.maxQuantityPerItem} unid. atingido.`);
                return;
            }
            this.inventory[item] += quantity;
        } else {
            if (quantity > this.maxQuantityPerItem) {
                console.log(`N é possivel add ${quantity} de ${item}. Limit de ${this.maxQuantityPerItem} unid. atingido.`);
                return;
            }
            this.inventory[item] = quantity;
        }
        console.log(`foi Add ${quantity} de ${item} ao inventario.`);
    }
    removeItem(item: string): void {
        if (this.inventory[item]) {
            delete this.inventory[item];
            console.log(`Item ${item} removido do inventario .`);
        } else {
            console.log(`Item ${item} n encontrado no inventário.`);
        }
    }
    getInventory(): Record<string, number> {
        return this.inventory;
    }
}
const warehouse = new WarehouseInventory();
warehouse.addItem("Mesa", 20);
warehouse.addItem("Cadeira", 30);
console.log("Inventario:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Cadeira", 5);
store.addItem("Cadeira", 6);
store.addItem("Mesa", 10);
store.addItem("Mesa", 2);
console.log("Inventario da loja:", store.getInventory());
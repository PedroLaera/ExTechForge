/*Sistema de Tarefas e Projetos
Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

Crie duas subclasses: Project e DailyTasks.
Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos*/
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
var TaskManager = /** @class */ (function () {
    function TaskManager() {
    }
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Lista para armazenar tarefas do projeto
        _this.tasks = new Set();
        return _this;
    }
    // Adiciona uma tarefa ao projeto
    Project.prototype.addTask = function (task) {
        if (this.tasks.has(task)) {
            console.log("A tarefa \"".concat(task, "\" j\u00E1 foi adicionada ao projeto."));
        }
        else {
            this.tasks.add(task);
            console.log("Tarefa \"".concat(task, "\" adicionada ao projeto."));
        }
    };
    // Lista todas as tarefas do projeto
    Project.prototype.listTasks = function () {
        return Array.from(this.tasks);
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Lista para armazenar tarefas diárias
        _this.tasks = new Set();
        return _this;
    }
    // Adiciona uma tarefa diária
    DailyTasks.prototype.addTask = function (task) {
        if (this.tasks.has(task)) {
            console.log("A tarefa \"".concat(task, "\" j\u00E1 foi adicionada \u00E0s tarefas di\u00E1rias."));
        }
        else {
            this.tasks.add(task);
            console.log("Tarefa \"".concat(task, "\" adicionada \u00E0s tarefas di\u00E1rias."));
        }
    };
    // Lista todas as tarefas diárias
    DailyTasks.prototype.listTasks = function () {
        return Array.from(this.tasks);
    };
    return DailyTasks;
}(TaskManager));
// Testando a implementação
var project = new Project();
project.addTask("Tarefa Teste");
project.addTask("Tarefa Teste 2");
project.addTask("Tarefa Teste 2");
console.log("tarefa projeto:", project.listTasks());
var dailyTasks = new DailyTasks();
dailyTasks.addTask("Daily teste");
dailyTasks.addTask("Daily teste 2");
dailyTasks.addTask("Daily teste 2");
console.log("tarefas diarias:", dailyTasks.listTasks());

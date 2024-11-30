/*Sistema de Tarefas e Projetos
Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[].

Crie duas subclasses: Project e DailyTasks.
Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto.
DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
Cada tarefa deve ser única; implemente uma lógica que evite tarefas duplicadas.
Dica: para diferenciar as tarefas e dizer se ela são de projetos ou diárias, utilizem objetos*/

abstract class TaskManager {
    abstract addTask(task: string): void;

    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        if (this.tasks.has(task)) {
            console.log(`A tarefa "${task}" já foi adicionada ao projeto.`);
        } else {
            this.tasks.add(task);
            console.log(`Tarefa "${task}" adicionada ao projeto.`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        if (this.tasks.has(task)) {
            console.log(`A tarefa "${task}" já foi adicionada às tarefas diárias.`);
        } else {
            this.tasks.add(task);
            console.log(`Tarefa "${task}" adicionada às tarefas diárias.`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

const project = new Project();
project.addTask("Tarefa Teste");
project.addTask("Tarefa Teste 2");
project.addTask("Tarefa Teste 2"); 
console.log("tarefa projeto:", project.listTasks());

const dailyTasks = new DailyTasks();
dailyTasks.addTask("Daily teste");
dailyTasks.addTask("Daily teste 2");
dailyTasks.addTask("Daily teste 2");
console.log("tarefas diarias:", dailyTasks.listTasks());
import { program } from "commander";

program.command('zaavya')
    .description('ZAAVYA')
    .option('-c, --create <string>', 'Create Task Board')
    .option('-l, --load <string>', 'Load a Board')
    .option('-ls, --list', 'List all board')
    .option('-d, --delete <string>', 'Delete a board')
    .action( () => {});

program.command('add')
    .description('Add a Task')
    .argument('<string>', 'Name of task')
    .action( () => {});

program.command('>>')
    .description('Shift Task to Right Column')
    .argument('<number>', 'Task id')
    .action( () => {});

program.command('<<')
    .description('Shift Task to Left Column')
    .argument('<number>', 'Task id')
    .action( () => {});

program.command('delete')
    .description('Delete Tasks')
    .argument('<number>', 'Task id')
    .action( () => {});

program.command('list')
    .description('List all Tasks & Columns ')
    .action( () => {});
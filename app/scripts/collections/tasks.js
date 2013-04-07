define([
    'backbone',
    'models/task',
    'backboneLocalStorage'
],
function(Backbone, Task, Store) {
    var Tasks = Backbone.Collection.extend({
        model:Task,
        localStorage: new Store('task-manager-tasks-collection')
        // urlRoot: '/tasks/'
    });
    return Tasks;
});

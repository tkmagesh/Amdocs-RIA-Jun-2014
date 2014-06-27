function TaskStorage(){
	this.storage = window.localStorage;
}
TaskStorage.prototype.add = function(taskName, isCompleted){
	var newId = new Date().getTime().toString();
	var newTask = {id : newId, name : taskName, isCompleted : isCompleted || false};
	this.storage.setItem(newId,window.JSON.stringify(newTask));
	return newTask;
}
TaskStorage.prototype.getAll = function(){
	var tasks = [];
	for(var i=0;i<this.storage.length;i++){
		var taskId = this.storage.key(i);
		var task = window.JSON.parse(this.storage.getItem(taskId));
		tasks.push(task);
	}
	return tasks;
}
TaskStorage.prototype.toggleCompletion = function(id){
	var task = window.JSON.parse(this.storage.getItem(id));
	task.isCompleted = !task.isCompleted;
	this.storage.setItem(task.id, window.JSON.stringify(task));
}
TaskStorage.prototype.remove = function(id){
	this.storage.removeItem(id);
}
(function(){
	var storage = new TaskStorage();
	$(function(){
		$("#btnAddTask").on("click", onBtnAddTaskClick);
		$("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
		$("#olTaskList").on("click","li", onTaskItemClick);
		$("div.divMessage").hide();

		storage.getAll().forEach(addTaskToUI);

		//offline cache control events
		$("#btnYes").click(function(){
			window.location.reload();
		});
		$("#btnNo").click(function(){
			$("#divCacheUpdate").hide();
		});
	});
	function onBtnRemoveCompletedClick(){
		$("#olTaskList > li.completed").fadeOut(100,function(){
			var $this = $(this);
			var taskId = $this.attr("task-id");
			storage.remove(taskId);
			$this.remove();
		});
		displayMessage("Zero or more completed tasks are removed..!");
	}
	function onBtnAddTaskClick(){
		var taskName = $("#txtTask").val();
		var newTask = storage.add(taskName);
		addTaskToUI(newTask);
	}
	function addTaskToUI(task){
		$("<li></li>")
			.html(task.name)
			.attr('task-id',task.id)
			.addClass(task.isCompleted ? "completed" : "")
			.hide()
			.prependTo("#olTaskList")
			.slideDown('slow');
		displayMessage("A new task is added..!");
	}


	function onTaskItemClick(){
		storage.toggleCompletion($(this).attr("task-id"));
		$(this).toggleClass("completed");
	}
	function displayMessage(msg){
		$("<div class='divMessage'></div>")
			.appendTo("div.divMessages")
			.hide()
			.html(msg)
			.slideDown(100)
			.delay(5000)
			.fadeOut(100,function(){
				$(this).remove();
			});
	}

})()
	var storage = window.localStorage;
	$(function(){
		$("#btnAddTask").on("click", onBtnAddTaskClick);
		$("#btnRemoveCompleted").click(onBtnRemoveCompletedClick);
		$("#olTaskList").on("click","li", onTaskItemClick);
		$("div.divMessage").hide();
		/*
			Storage
		*/
		for(var i=0;i<storage.length;i++){
			var taskId = storage.key(i);
			var taskName = storage.getItem(taskId);
			addTaskToUI(taskId,taskName);
		}
	});
	function onBtnRemoveCompletedClick(){
		$("#olTaskList > li.completed").fadeOut(100,function(){
			var $this = $(this);
			var taskId = $this.attr("task-id");
			storage.removeItem(taskId);
			$this.remove();
		});
		displayMessage("Zero or more completed tasks are removed..!");
	}
	function onBtnAddTaskClick(){
		var taskName = $("#txtTask").val();
		var newId = new Date().getTime().toString();
		storage.setItem(newId,taskName);
		addTaskToUI(newId,taskName);
		
	}
	function addTaskToUI(taskId, taskName){
		$("<li></li>")
			.html(taskName)
			.attr('task-id',taskId)
			.hide()
			.prependTo("#olTaskList")
			.slideDown('slow');
		displayMessage("A new task is added..!");
	}


	function onTaskItemClick(){
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
	
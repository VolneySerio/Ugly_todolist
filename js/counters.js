 function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length
    const UncompletedTasks = document.querySelectorAll("li:not(.completed)").length

    document.getElementById("completed-counter").textContent = completedTasks
    document.getElementById("uncompleted-counter").textContent = UncompletedTasks
}
export const completedCounter = document.getElementById("completed-counter");
export const uncompletedCounter = document.getElementById(
  "Uncompleted-counter"
);

export function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const UncompletedTasks =
    document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = UncompletedTasks;
}

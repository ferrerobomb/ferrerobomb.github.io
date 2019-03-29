$(function() {
  var next_mode = $("body").hasClass("night-mode") ? "day" : "night";
  changeReadModel();

  $("#nightshift").click(function() {
    switchReadMode();
  });

  function switchReadMode() {
    var next_mode = $("body").hasClass("night-mode") ? "day" : "night";
    setLocalData("read-mode", next_mode);
    changeReadModel();
  }

  function changeReadModel() {
    if (getLocalData("read-mode") == "night") {
      $("body").addClass("night-mode");
      $("#nightshift").removeClass("fas fa-moon");
      $("#nightshift").addClass("fas fa-sun");
    }

    // 非夜間模式
    if (getLocalData("read-mode") == "day") {
      $("body").removeClass("night-mode");
      $("#nightshift").removeClass("fas fa-sun");
      $("#nightshift").addClass("fas fa-moon");
    }
  }

  function setLocalData(key, value) {
    if (window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  }

  function getLocalData(key) {
    if (window.localStorage) {
      return window.localStorage.getItem(key);
    }
  }
});

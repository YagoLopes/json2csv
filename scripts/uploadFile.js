document.getElementById("jsonInputFile").onchange = function () {
  var file = this.files[0];
  var reader = new FileReader();
  reader.onload = function () {
    document.getElementById("csvTextearea").value = this.result;
  };
  reader.readAsText(file);
};

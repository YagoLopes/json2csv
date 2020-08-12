document.getElementById("jsonInputFile").onchange = function () {
  var file = this.files[0];
  var reader = new FileReader();
  reader.onload = function () {
    document.getElementById("jsonTextarea").value = this.result;
  };
  reader.readAsText(file);
};

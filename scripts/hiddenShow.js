function changejsonSelect() {
  const value = document.getElementById("jsonSelect").value;
  if (value === "selecionar") {
    showInputFile();
    hiddenTextarea();
  } else {
    showTextarea();
    hiddenInputFile();
  }

  function showTextarea() {
    document.getElementById("jsonTextarea").style = "display: block;";
  }

  function hiddenTextarea() {
    document.getElementById("jsonTextarea").style = "display: none;";
  }

  function showInputFile() {
    document.getElementById("jsonInputFile").style = "display: block;";
  }

  function hiddenInputFile() {
    document.getElementById("jsonInputFile").style = "display: none;";
  }
}

document.getElementById("downloader").onclick = function () {
  const text = document.getElementById("csvTextearea").value;
  const name = `${new Date().getTime().toString()}.csv`;
  downloadToFile(text, name, "text/plain");

  function downloadToFile(content, filename, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }
};

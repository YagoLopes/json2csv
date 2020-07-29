function convertJsonInCsv() {
  function start() {
    try {
      const value = document.getElementById("json").value;
      const obj = JSON.parse(value);
      if (Array.isArray(obj)) {
        const header = Object.keys(obj[0]);
        const text = obj.map((value) => format(Object.values(value)));
        setPreview(header, text);
      } else {
        const header = Object.keys(obj);
        const text = Object.values(obj);
        setPreview(header, text);
      }
    } catch (e) {
      alert(`JSON Inválido Erro \n ${e}`);
    }
  }

  function format(text) {
    text = String(text).replace(",", "");
    return text;
  }

  function setPreview(header, text) {
    document.getElementById("csv").value = `${header}\n${text}`;
  }

  start();
}

function clickButtonDownload() {
  const text = document.getElementById("csv").value;
  const name = `${new Date().getTime().toString()}.csv`;
  downloadToFile(text, name, "text/plain");
}

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
};

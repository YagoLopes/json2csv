function convertJsonInCsv() {
  function start() {
    const value = document.getElementById("json").value;
    convert(JSON.parse(value));
  }

  function convert(obj) {
    try {
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
      alert(`Erro: ${e}`);
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

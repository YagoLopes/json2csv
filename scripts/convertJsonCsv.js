function convertJsonInCsv() {
  try {
    const value = document.getElementById("jsonTextarea").value;
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

  function format(text) {
    text = String(text).replace(",", "");
    return text;
  }

  function setPreview(header, text) {
    document.getElementById("csv").value = `${header}\n${text}`;
  }
}

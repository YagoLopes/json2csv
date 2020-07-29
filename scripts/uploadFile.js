async function changeInputFile() {
  const value = await document.getElementById("jsonInputFile").files[0];
  console.log(value);
}

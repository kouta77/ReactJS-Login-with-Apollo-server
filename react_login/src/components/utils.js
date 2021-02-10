
function getBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {};
  }

  export {getBase64};
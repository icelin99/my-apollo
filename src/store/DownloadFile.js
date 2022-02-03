function DownloadFile(data, filename) {
  const ele_a = document.createElement('a');
  //hide <a>
  ele_a.style.display = 'none';
  //Generates a BLOB with json data content
  const blob = new Blob([JSON.stringify(data)]);
  console.log('download data', JSON.stringify(data));
  //Generate a URL to the blob, and assign it to the <a> href attribute
  ele_a.href = URL.createObjectURL(blob);
  ele_a.download = filename;
  document.body.appendChild(ele_a);
  //simulate clicking
  ele_a.click();
  document.body.removeChild(ele_a);
}

export default DownloadFile;
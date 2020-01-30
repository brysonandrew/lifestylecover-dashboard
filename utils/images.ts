export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

function ResizeImage() {
  var filesToUpload = document.getElementById('imageFile').files;
  var file = filesToUpload[0];

  // Create an image
  var img: HTMLImageElement = document.createElement("img");
  // Create a file reader
  var reader = new FileReader();
  // Set the image once loaded into file reader
  reader.onload = function(e) {
          img.src = e.target.result;

          var canvas = document.createElement("canvas");
          //var canvas = $("<canvas>", {"id":"testing"})[0];
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);

          var MAX_WIDTH = 400;
          var MAX_HEIGHT = 400;
          var width = img.width;
          var height = img.height;

          if (width > height) {
              if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
              }
          } else {
              if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
              }
          }
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          var dataurl = canvas.toDataURL("image/png");
          document.getElementById('output').src = dataurl;
      }
      // Load files into file reader
  reader.readAsDataURL(file);
}

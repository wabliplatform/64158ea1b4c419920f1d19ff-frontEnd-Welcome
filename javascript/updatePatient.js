let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
document.getElementById('ivr9s').onclick = (event) => {
    event.preventDefault();
    let userId = window.location.pathname.replace('/updatePatient/','');let user = new TempApi.User();user['userName'] = document.querySelector("[annotationname = 'userName']").value;user['userImage'] = {
        data: document.querySelector("[annotationname = 'userImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'userImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'userImage']").src,
        name: document.querySelector("[annotationname = 'userImage']").getAttribute("name")
      }; let opts = {user};apiUserApi.updateuser( userId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = userName]').value = response.body.query.userName ;
      if(response.body.query.userImage !== undefined){

        if(document.querySelector('[annotationname = userImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = userImage]').setAttribute('data-image-base64',response.body.query.userImage.data);
        }
        else{
          document.querySelector('[annotationname = userImage]').src = response.body.query.userImage.data;
        }
        document.querySelector('[annotationname = userImage]').name = response.body.query.userImage.name;
      }
      {   location.href= '/Home' ;}}});};window.onload = () => {let userId = window.location.pathname.replace('/updatePatient/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = userName]').value = response.body.query.userName; } catch (e) { console.log(e) };try { 
      if(response.body.query.userImage !== undefined){
        if(document.querySelector('[annotationname = userImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = userImage]').setAttribute('data-image-base64',response.body.query.userImage.data);
          let fileName = response.body.query.userImage.name;
          let file = new File([response.body.query.userImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = userImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = userImage]').src = response.body.query.userImage.data ;
        }
        document.querySelector('[annotationname = userImage]').name = response.body.query.userImage.name ;
      }
       } catch (e) { console.log(e) };}});};
let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('ip876k').onclick = (event) => {
    event.preventDefault();
    let userId = window.location.pathname.replace('/userInfo/','');
      if(userId === '/userInfo' || userId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ip876k")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            userId = value._id;
            parentId = key;
          }
        });
      }
    apiUserApi.deleteuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/Home' ;}}});};window.onload = () => {let userId = window.location.pathname.replace('/userInfo/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = userName]').textContent = response.body.query.userName; } catch (e) { console.log(e) };try { 
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
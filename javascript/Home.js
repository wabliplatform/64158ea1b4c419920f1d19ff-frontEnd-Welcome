let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';window.onload = () => {apiUserApi.getAlluser((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iwi4h").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'userImage']");
if(insideSubDataElement !== null && data[data.length -i -1].userImage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].userImage.data;
  insideSubDataElement.name = data[data.length -i -1].userImage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'userImage' && data[data.length -i -1].userImage !== undefined){
  subDataElements[i].src = data[data.length -i -1].userImage.data;
  subDataElements[i].name = data[data.length -i -1].userImage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'userName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].userName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'userName'){
        subDataElements[i].textContent = data[data.length -i -1].userName;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    
    // Retrieve current data from local storage
    const storedData = window.localStorage.getItem("data");
    const currentData = storedData
        ? new Map(JSON.parse(storedData))
        : new Map();

    // Add new data to current data
    const newData = Array.from(map.entries());
    newData.forEach(([key, value]) => {
        currentData.set(key, value);
    });

    // Save updated data to local storage
    window.localStorage.setItem(
        "data",
        JSON.stringify(Array.from(currentData.entries()))
    );
    
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};
var red_color = "#EF4444"; // picked 2
var blue_color = "#3B82F6"; // default color
var yellow_color = "#F59E0B"; // selected
var purple_color = "#8B5CF6";

export function BubbleSort(data, div_update) {
  for (let i = 0; i < data.length - 1; i++) {

    for (var j = 0; j < data.length - i - 1; j++) {

      div_update(data[j], "#F59E0B"); //Color update

      if (data[j].textValue > data[j + 1].textValue) {

        div_update(data[j], "#EF4444"); //Color update

        div_update(data[j + 1], "#EF4444"); //Color update

        swapProperties(data[j], "translateX", data[j + 1], "translateX");

        swapProperties(data[j], "translateY", data[j + 1], "translateY");

        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;

        div_update(data[j], "#EF4444"); //Height update
        div_update(data[j + 1], "#EF4444"); //Height update
      }
      div_update(data[j], "#60A5FA"); //Color update
    }
    div_update(data[j], "#3B82F6"); //Color update
  }
  div_update(data[0], "#3B82F6"); //Color update

  console.log(data, "final inner");
  return data;
}

// function div_update(data, color) {
//   window.setTimeout(function () {
//     console.log(data);
//   }, 200);
// }

function swapProperties(sourceObj, sourceKey, targetObj, targetKey) {
  var temp = sourceObj[sourceKey];
  sourceObj[sourceKey] = targetObj[targetKey];
  targetObj[targetKey] = temp;
}



export const bubbleSort = (arr) => {
  let results = [...arr];
  const swapper = (data,i,j) => {
    const {translateX:x1,translateY:y1} = data[i];

    const {translateX:x2,translateY:y2} = data[j];


    const [tempX,tempY] = [x1,y1];

    data[i].translateX = x2;
    
    // data[i].translateY = y2;

    data[j].translateX = tempX;

    // data[j].translateY = tempY;

    [ data[i] , data[j] ] = [ data[j] , data[i] ];

  }



  for(let i = results.length  ;i > 0 ; i--){
    
    for(var j = 0;j < i - 1 ; j++){
      console.log(results[j], j , "sorting")
      
      results[j].isGettingSorted = true;

      if( +results[j].textValue > +results[j+1].textValue){

        swapper(results,j,j+1);

      }
    }
    console.log(results[j], j , "sorted")

    results[j].isGettingSorted = false;
    results[j].isSorted = true;

  }


  return results;
}
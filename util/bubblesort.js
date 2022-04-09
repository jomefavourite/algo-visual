var red_color = "#EF4444"; // picked 2
var blue_color = "#3B82F6"; // default color
var yellow_color = "#F59E0B"; // selected
var purple_color = "#8B5CF6";

export function BubbleSort(data) {
  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      div_update(data[j], div_sizes[j], "#F59E0B"); //Color update

      if (div_sizes[j] > div_sizes[j + 1]) {
        div_update(data[j], div_sizes[j], "#EF4444"); //Color update
        div_update(data[j + 1], div_sizes[j + 1], "#EF4444"); //Color update

        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        div_update(data[j], div_sizes[j], "#EF4444"); //Height update
        div_update(data[j + 1], div_sizes[j + 1], "#EF4444"); //Height update
      }
      div_update(data[j], div_sizes[j], "#60A5FA"); //Color updat
    }
    div_update(data[j], div_sizes[j], "#3B82F6"); //Color update
  }
  div_update(data[0], div_sizes[0], "#3B82F6"); //Color update
}

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

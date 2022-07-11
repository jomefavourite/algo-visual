export const calculateCurve = (x1, y1, x2, y2) => {
  var mpx = (x2 + x1) * 0.5;
  var mpy = (y2 + y1) * 0.5;

  // angle of perpendicular to line:
  var theta = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;

  // distance of control point from mid-point of line:
  var offset = 30;

  // location of control point:
  var c1x = mpx + offset * Math.cos(theta);
  var c1y = mpy + offset * Math.sin(theta);
  let directedPath = `M${x1} ${y1} Q${c1x} ${c1y} ${x2} ${y2}`;
  return directedPath;
};
export const calculateTextLoc = (x1, y1, x2, y2) => {
  var mpx = (x2 + x1) * 0.5;
  var mpy = (y2 + y1) * 0.5;

  // angle of perpendicular to line:
  var theta = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;

  // distance of control point from mid-point of line:
  var offset = 30;

  // location of control point:
  var c1x = mpx + offset * Math.cos(theta);
  var c1y = mpy + offset * Math.sin(theta);
  return { c1x, c1y };
};
//calculates accurate x2,y2 for the edge to just intersect the node
export const calculateAccurateCoords = (x1, y1, x2, y2) => {
  let distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  let d2 = distance - 30;
  let ratio = d2 / distance;
  let dx = (x2 - x1) * ratio;
  let dy = (y2 - y1) * ratio;
  let tempX = x1 + dx;
  let tempY = y1 + dy;
  return { tempX, tempY };
};
//find the to Node for the edge drawn for touch based devices
export const findToNodeForTouchBasedDevices = (x, y, nodes) => {
  const r = 30;
  return nodes.find((node) => doesPointLieOnCircle(x, y, r, node.x, node.y));
};

//test if point lies on the circle
export const doesPointLieOnCircle = (
  centerX,
  centerY,
  radius,
  pointX,
  pointY
) => {
  const difference = Math.sqrt(
    Math.pow(centerX - pointX, 2) + Math.pow(centerY - pointY, 2)
  );
  return difference <= radius;
};

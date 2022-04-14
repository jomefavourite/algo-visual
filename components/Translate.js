const TranslateGroup = ({ x: number = 0, y: number = 0, children }) => {

  if (!x && !y) return children;
  return <g transform={`translate(${x},${y})`}>{children}</g>;
};

export default TranslateGroup;

const TranslateGroup = ({ x = 0, y = 0, children }) => {
  if (!x && !y) return children;
  return <g transform={`translate(${x},${y})`}>{children}</g>;
};

export default TranslateGroup;

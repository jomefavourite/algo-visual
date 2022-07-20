export const handleNavigationSearch = (page) => {
  return [
    {
      value: "Home",
      href: "/",
      active: page === "home" ? true : false,
    },
    {
      value: "Linear Search",
      href: "/searching/linear",
      active: page === "linear" ? true : false,
    },
    {
      value: "Binary Search",
      href: "/searching/binary",
      active: page === "binary" ? true : false,
    },
    {
      value: "Jump Search",
      href: "/searching/jump",
      active: page === "jump" ? true : false,
    },
    {
      value: "View Comparison",
      href: "/searching/comparison",
      active: page === "comparison" ? true : false,
    },
  ];
};

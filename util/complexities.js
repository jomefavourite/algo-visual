export class Complexities {
  static logarithmic = {
    name: "Logarithmic",
    notation: "Ο(log n)",
    rating: "excellent",
    calculate: (n) => Math.round(Math.log2(n)),
  };

  static linear = {
    name: "Linear",
    notation: "Ο(n)",
    rating: "good",
    calculate: (n) => n,
  };

  static bilinear = {
    name: "Bilinear",
    notation: "Ο(n+k)",
    rating: "good",
    calculate: (n) => 2 * n,
  };

  static linearithmic = {
    name: "Linearithmic",
    notation: "Ο(n log n)",
    rating: "fair",
    calculate: (n) => Math.round(n * Math.log2(n)),
  };

  static quadratic = {
    name: "Quadratic",
    notation: "Ο(n²)",
    rating: "poor",
    calculate: (n) => n * n,
  };

  static exponential = {
    name: "Exponential",
    notation: "Ο(2ⁿ)",
    rating: "bad",
    calculate: (n) => 2 ** Math.min(n, 32),
  };

  static common = [
    Complexities.exponential,
    Complexities.quadratic,
    Complexities.linearithmic,
    Complexities.linear,
    Complexities.logarithmic,
  ];
}

export default Complexities;

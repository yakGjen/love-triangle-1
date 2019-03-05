module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangles = 0;
  preferences.forEach((item, i) => {
    const numb2 = preferences[item - 1];
    const num3 = preferences[numb2 - 1];
    num3 === i + 1 ? triangles++ : null;
  });
  return Math.floor(triangles / 3);
};
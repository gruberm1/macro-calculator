export function calculateMacros(calories){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let macros = {
        protein: 0,
        carb: 0,
        fat: 0
      };

      resolve(macros);
    }, delay);
  });
}

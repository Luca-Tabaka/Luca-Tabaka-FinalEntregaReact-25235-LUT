const categorias = [
  "Cerveza",
  "Vino",
  "Sin Alcohol",
  "Bebidas Espirituosas",
  "Promos"
];

const subcategorias = {
  Cerveza: ["Lager", "Pilsen", "IPA", "APA", "Irish Red", "Porter", "Sin alcohol", "Roja", "Negra", "Artesanal"],
  Vino: ["Malbec", "Rosado", "Espumante", "Chardonnay", "Cabernet Sauvignon"],
  "Sin Alcohol": ["Gaseosa", "Gaseosa sin azúcar", "Agua natural", "Agua con Gas", "Saborizadas", "Energizante"],
  "Bebidas Espirituosas": ["Vodka", "Gin", "Whisky"],
  Promos: ["Sin Alcohol", "Alcoholica"]
};



export const coloresCategorias = {
  "Cerveza": "#e0bb42",            
  "Vino": "#c1121f",               
  "Sin Alcohol": "#4dabf7",         
  "Bebidas Espirituosas": "#9b4dca",
  Promos: "#f77f00"
};


export { categorias, subcategorias};
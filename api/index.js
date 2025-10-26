const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

const menuItems = [
  // Destaques
  { id: 1,  name: 'X-Bacon Supremo', description: 'Pão brioche, 160g de carne, bacon crocante, queijo prato, maionese da casa.', price: 24.90, image: '', category: 'destaques' },
  { id: 2,  name: 'Combo Clássico', description: 'X-Salada + Batata P + Refri 350ml.', price: 32.90, image: '', category: 'destaques' },

  // Lanches
  { id: 10, name: 'X-Salada', description: 'Pão, carne, queijo, alface, tomate, maionese.', price: 19.90, image: '', category: 'lanches' },
  { id: 11, name: 'X-Burger', description: 'Pão, carne, queijo e maionese da casa.', price: 17.00, image: '', category: 'lanches' },
  { id: 12, name: 'X-Egg Bacon', description: 'Pão brioche, carne 160g, ovo, bacon, queijo.', price: 25.90, image: '', category: 'lanches' },
  { id: 13, name: 'X-Calabresa', description: 'Carne 160g, calabresa acebolada, queijo, maionese.', price: 23.00, image: '', category: 'lanches' },

  // Dogs
  { id: 20, name: 'Dog Tradicional', description: 'Pão, salsicha, purê, batata palha, milho, ketchup/mostarda.', price: 14.90, image: '', category: 'dogs' },
  { id: 21, name: 'Dog Nego', description: 'Duplo de salsicha, queijo derretido e molho especial.', price: 18.90, image: '', category: 'dogs' },

  // Porções
  { id: 30, name: 'Batata Frita P', description: 'Porção pequena para acompanhar.', price: 12.00, image: '', category: 'porcoes' },
  { id: 31, name: 'Batata Frita G', description: 'Porção generosa, crocante por fora, macia por dentro.', price: 22.00, image: '', category: 'porcoes' },
  { id: 32, name: 'Calabresa Acebolada', description: 'Calabresa fatiada salteada com cebola.', price: 28.00, image: '', category: 'porcoes' },

  // Combos
  { id: 40, name: 'Combo Nego', description: 'X-Bacon + Batata P + Refri lata.', price: 36.90, image: '', category: 'combos' },
  { id: 41, name: 'Combo Família', description: '2 lanches à escolha + Batata G + 2 refri lata.', price: 72.00, image: '', category: 'combos' },

  // Bebidas
  { id: 50, name: 'Refrigerante Lata 350ml', description: 'Coca, Guaraná, Fanta...', price: 7.00, image: '', category: 'bebidas' },
  { id: 51, name: 'Água Mineral', description: 'Sem gás 500ml.', price: 4.50, image: '', category: 'bebidas' },
  { id: 52, name: 'Suco 300ml', description: 'Sabores do dia.', price: 8.50, image: '', category: 'bebidas' },

  // Sobremesas
  { id: 60, name: 'Brigadeiro (unid.)', description: 'Clássico, cremoso, coberto com granulado.', price: 3.50, image: '', category: 'sobremesas' },
  { id: 61, name: 'Pudim (fatia)', description: 'Tradicional, calda de caramelo.', price: 9.90, image: '', category: 'sobremesas' },

  // Adicionais
  { id: 70, name: '+ Queijo', description: 'Fatia extra.', price: 3.00, image: '', category: 'adicionais' },
  { id: 71, name: '+ Bacon', description: 'Porção extra.', price: 4.50, image: '', category: 'adicionais' },
  { id: 72, name: 'Molho da Casa', description: 'Cremoso, levemente picante.', price: 2.50, image: '', category: 'adicionais' },
];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

module.exports = app;

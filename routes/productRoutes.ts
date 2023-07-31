import express from 'express';

const router = express.Router();
// only admin routes product
router.post('/create', () => {
 console.log("...");
})
router.delete('delete/:id', () => {
 console.log("...");
})
router.put('update/:id', () => {
 console.log("...");
})

// only user routes product
router.get('/show/:id', () => {
   console.log("...");
})
router.get('/show/:categoryId', () => {
   console.log("...");
})
router.get('/related/:productId', () => {
  console.log("...")
});

// shared routes [user , admin]
router.get('/show', () => {
  // include here params as category? | limit? | orderBy?
  console.log("cerate ...");
})
router.get('/search', () => {
  console.log("cerate ...");
})
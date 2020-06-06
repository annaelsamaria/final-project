import { createSlice } from '@reduxjs/toolkit'


const productData = [
  {
    "id": 1,
    "title": "vase 1",
    "category": "vases",
    "price": 780,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 2,
    "title": "vase 2",
    "category": "vases",
    "price": 780,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 3,
    "title": "vase 3",
    "category": "vases",
    "price": 780,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 4,
    "title": "candle holder 1",
    "category": "candle holders",
    "price": 780,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 5,
    "title": "candle holder 2",
    "category": "candle holders",
    "price": 780,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 6,
    "title": "candle holder 3",
    "category": "candle holders",
    "price": 780,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 7,
    "title": "egg cup",
    "category": "egg cups",
    "price": 380,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 8,
    "title": "flat candle holder 1",
    "category": "candle holders",
    "price": 580,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  },
  {
    "id": 9,
    "title": "flat candle holder 2",
    "category": "candle holders",
    "price": 580,
    "main_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "second_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80",
    "third_img": "https://images.unsplash.com/photo-1556207944-1e0033a54801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
  }
]

export const products = createSlice({
  name: 'products',
  initialState: productData
})
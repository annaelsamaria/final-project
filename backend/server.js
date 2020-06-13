import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productData from './data/ceramics.json'
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/authAPI';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);

const User = mongoose.model('User', {
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
  savedProducts: {
    type: [String],
  }
});


const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header('Authorization'),
    });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(403).json({ message: 'you need to log in to see this page' });
    }
  } catch (err) {
    res.status(400).json({ message: 'access denied', errors: err.errors });
  }
};

//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(bodyParser.json());

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// With "Query Parameter
// localhost:8080/products?category=vases
app.get('/products', (req, res) => {
  const { category } = req.query

  if (category) {
    let getCategory = productData.filter((item) =>
      item.category.toString().toLowerCase().includes(category)
    )
    if (getCategory.length > 0) {
      res.json(getCategory)
    } else {
      res.status(404).json({ message: 'No products found' })
    }
  }
  res.json(productData)
})

// single product
app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const productsId = productData.filter((item) => item.id === +id)

  if (productsId.length > 0) {
    res.json(productsId)
  }
  else {
    res.status(404).send({ message: 'No product found' })
  }
})


// SIGN UP
app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, address, postalCode, city, email, password } = req.body;
    const user = new User({ firstName, lastName, address, postalCode, city, email, password: bcrypt.hashSync(password) });
    const newUser = await user.save();
    res.status(201).json({
      message: 'User created.',
      userId: newUser._id,
      accessToken: newUser.accessToken,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Could not create user.', errors: err.errors });
  }
});

// SECURE ENDPOINT, CHECK IF USER IS AUTHORIZED
app.get('/users/:id', authenticateUser);
app.get('/users/:id', (req, res) => {
  const loginMessage = `This is a super secret message for  ${req.user.name}`;
  res.status(201).json({ loginMessage });
});

// LOG IN
app.post('/sessions', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({ userId: user._id, accessToken: user.accessToken });
    } else {
      res.json({ notFound: true });
    }
  } catch (err) {
    res.status(400).json({ message: 'Could not log in', errors: err.errors });
  }
});


//post endpoints savedProducts
app.post('/users/:id/saved', async (req, res) => {
  try {
    const favorite = await Thought.findOneAndUpdate({ savedProducts: req.params.id })
    res.json(favorite)
  } catch (err) {
    res.status(400).json({ message: 'Could not save product', error: err.errors })
  }
})


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

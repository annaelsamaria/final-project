import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import crypto from 'crypto';
import bcrypt from 'bcrypt-nodejs';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/hk240API';
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

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

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
  const loginMessage = `Welcome ${req.user.firstName}`;
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


// post endpoints savedProductsapp.post('/products/:id/save', authenticateUser);
app.post('/products/:id/save', async (req, res) => {
  const id = req.params.id;
  try {
    const favorite = await User.findOneAndUpdate({ _id: req.user._id }, { $push: { savedProducts: id } })
    res.json(favorite)
  } catch (err) {
    res.status(400).json({ message: 'Could not save product', error: err.errors })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

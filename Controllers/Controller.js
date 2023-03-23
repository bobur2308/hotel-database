const User = require('../models/userModel')
const Guest = require('../models/guestsModel')
const loginPage = (req,res)=>{
  res.render('login',{
  title:"Admin login page"
  });
}

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (email === 'oldkhiva@mail.ru' && password === 'oldkhiva1234') {
    // set the user property on the session object
    req.session.user = { email };
    res.redirect('/add');
  } else {
    res.redirect('/');
  }
}
const addVisitors = async (req, res) => {
  // Check if user is logged in with the correct email
  if (req.session.user && req.session.user.email === 'oldkhiva@mail.ru') {
    const users = await Guest.find().lean()
    res.render('addVisitors',{
      title:"Adding visitors page",
      users:users.reverse()
    })
  } else {
    // Redirect to homepage if user is not logged in with the correct email
    res.redirect('/')
  }
}


const addVisitorsPost = async (req, res) => {
  const { name, passport, region,dateIn,dateOut } = req.body;
  const newGuest = new Guest({
    name,
    passport,
    region,
    dateIn,
    dateOut
  });
  await newGuest.save();
  res.redirect('/add');
};

const deleteGuest = async (req,res)=>{
  try {
    await Guest.findByIdAndRemove(req.params.id)
    res.redirect('/add')
  } catch (err) {
    console.log(err);
  }
}

const logOut = (req,res)=>{
  req.session.destroy(()=>{
    res.redirect('/')
  })
}


module.exports = {
  loginPage,
  adminLogin,
  addVisitors,
  addVisitorsPost,
  deleteGuest,
  logOut
}
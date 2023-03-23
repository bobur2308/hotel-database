const protected = (req,res,next)=>{
  if(req.session && req.session.isLogged){
     return next();
  }
  return res.redirect('/')
}

const guest = (req,res,next)=>{
  if(req.session && req.session.isLogged){
     return res.redirect('/add')
  }
  return next();
}

module.exports = {
  protected,
  guest
}

const {sign, verify} = require("jsonwebtoken");
const Brand = require('../models/Brand');
var jwt = require("jsonwebtoken");





    



const createToken = async (user, res) =>{


  // const token = sign({id: user._id, email: user.email}, `${process.env.JWT_SECRET_KEY}`, {expiresIn: '1d'});
const token = sign({id: user._id, email: user.email}, `${process.env.JWT_SECRET_KEY}`, {expiresIn: '1d'});

  // logger.customerLogger.log('info', `${process.env.JWT_SECRET_KEY}`);
  
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    sameSite: "none",
    secure: true,
  };
  
  const brandObj = { 'brand_id': user._id, 'brand_name': user.brand_name };
  
  await Brand.findByIdAndUpdate(user._id,
    { $set: { 
      access_token: token } },
    { new: true }
  );
  
  res.status(201).cookie('billsBookToken', token, options).json({
    token,
    brandObj,
  });
  
  }




const isBrandAuthenticated = (req, res, next) =>{

const token  = req.cookies['token'];  
    if(!token || token == undefined || token ==null){
       req.statusCode = '400';
          next();
        
       
    }
    try{
        verify(token, `${process.env.JSON_SECRET}`, function(err, decodedToken) {
            if(err) { /* handle token err */ }
            else {
             req.userId = decodedToken.id;   // Add to req object
             next();
            }
            });
  
    } catch(err){

    }
   
return res.status(500).send();

}



const creatorToken = (user, res, is_instagram_connected) =>{

  const token = sign({id: user._id, email: user.email}, `${process.env.JSON_SECRET}`, {expiresIn: '1d'});
  
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    sameSite: "none",
    secure: true,
  };
  

  const creatorObj = { 'creator_id': user._id, 'creator_name': user.brand_name, 'creator_category': user.category, 'is_instagram_connected' : is_instagram_connected };

res.status(201).cookie('creator_token', token, options).json({
  token,
  creatorObj,
});
  
  }



  const isCreatorAuthenticated = (req, res, next) =>{

    const token  = req.cookies['creator_token'];  
        if(!token || token == undefined || token ==null){
           req.statusCode = '400';
              next();
            
           
        }
        try{
            verify(token, `${process.env.JSON_SECRET}`, function(err, decodedToken) {
                if(err) { /* handle token err */ }
                else {
                 req.userId = decodedToken.id;   // Add to req object
                 next();
                }
                });
      
        } catch(err){
    
        }
       
    return res.status(500).send();
    
    }


module.exports = {createToken, isBrandAuthenticated, creatorToken, isCreatorAuthenticated};
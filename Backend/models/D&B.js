const mongoose = require('mongoose');

const DandBSchema = new mongoose.Schema({


         isAutomaticOn:{ type:Boolean, default:false,},
         isRaisetoWakeOn:{type:Boolean,default:false,},
   
     
                     isScheduledOn:{type:Boolean,default:false,},
                     ColorTemperature:{type:Number,default:50,},  
                     isManually:{type:Boolean , default:false},
                     selectedAutoLockTime:{selectedTime: String },

                   
      isBoldTextOn:{ type:Boolean, default:false},
          TextSize:{ type:Number,default:50,},
       

  
  });

  const  DBModle  = mongoose.model("DandB", DandBSchema , "Disply & Brightness");
  module.exports = DBModle
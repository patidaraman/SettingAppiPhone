const mongoose = require('mongoose');

const DandBSchema = new mongoose.Schema({


         isAutomaticOn:{ type:Boolean, default:false,},
         isRaisetoWakeOn:{type:Boolean,default:false,},
         brightness: { type: Number, default: 80 },
   
     
                     isScheduledOn:{type:Boolean,default:false,},
                     ColorTemperature:{type:Number,default:50,},  
                     isManually:{type:Boolean , default:false},
                     selectedTime: {
                        type: String,
                        required: true,
                      },

                   
      isBoldTextOn:{ type:Boolean, default:false},
          TextSize:{ type:Number,default:20,},
         
       

  
  });

  const  DBModle  = mongoose.model("DandB", DandBSchema , "Disply & Brightness");
  module.exports = DBModle
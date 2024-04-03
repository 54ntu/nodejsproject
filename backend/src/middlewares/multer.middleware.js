const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temp")
    },
    filename:function (req,file,cb){
        cb(null,file.originalname)
    }
})

// export const upload  = multer({   //this one is moduleJS syntax of exporting function
//     storage,  
// })

module.exports.upload = multer({
    storage,
})
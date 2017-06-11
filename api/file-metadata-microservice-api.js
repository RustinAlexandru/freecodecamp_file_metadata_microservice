module.exports = function(app) {
    
    const multer = require("multer");
    const upload = multer({ dest: 'uploads/' });
    
    app.post('/analyse', upload.single('fileToUpload'), (req, res) => {
      res.send({"size": req.file.size})
    });
    
    
};
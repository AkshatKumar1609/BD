const testController = (req,res)=>{
    res.status(200).json({
        message: 'This is a test route from the controller',
        success: true
    });
};

module.exports = {testController};
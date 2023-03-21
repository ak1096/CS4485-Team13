// NOT SURE ABOUT THIS FILE, MIGHT RESTART. SUPPOSED TO CREATE ENDPOINTS

const router =  require("express").Router();

// login endpoint
router.post("/signup", async (req, res) => {
    try{ // if there is an error sending the post request
        const result = await asyncFunction(req.body);
        res.json(result);
    }
    catch (error){
        console.error("signup did not work");
        next(error);
    }
});

// login endpoint
router.post("/login", async (req, res) => {
    try{ // if there is an error sending the post request
        const result = await asyncFunction(req.body);
        res.json(result);
    }
    catch (error){
        console.error("login did not work");
        next(error);
    }
});

module.exports = router;
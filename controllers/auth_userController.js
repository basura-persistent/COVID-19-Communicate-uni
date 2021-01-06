const pool = require('../database/connector');

class Authuser_Controller{
    static async auth_admin(req,res){
        let username = res.body.username;
        let password = res.body.password;
        return new Promise((resolve, reject) => {
            let username = 
            client.query('SELECT * FROM admin_user WHERE username =$1 AND password = $2', [username, password], (err,result) => {//verifying exsistene of admin user information inthe data base
            try {
                if(result.rows.length > 0){
                    res.render('pages/admin_user')//if query returns profile with username and password matching then we will let them render the designated view 
                }else{
                    res.send('pages/index.ejs');//otherwise we will reject them 
                    client.release();
                 } 
            } catch(err){
                console.log(err);
            }
        });
    });
}

static async auth_general(req, res){
    let username = res.body.username;
    let password = res.body.password;
    return new Promise((resolve, reject) => {
        client.query('SELECT * FROM admin_user WHERE username =$1 AND password = $2', [username, password], (err,result) => {//running verification of inputted data from gen user 
        try {
            if(result.rows.length > 0){
                res.render('pages/general_user')
            }else{
                res.send("Wrong pass");
                client.release();
             } 
        } catch(err){
            console.log(err);
        }
    });
});
}


}

module.exports = Authuser_Controller;




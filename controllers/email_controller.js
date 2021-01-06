const pool = require('../database/connector');


class Email_Comm{
    static async campus_update(req, res){
        var cols = [req.body.username, req.body.header, req.body.campus_update];
        return new Promise((resolve, reject) => {
            client.query("INSERT INTO campus_wide_update(username, header, message, datesub) VALUES($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *", [cols], (err,result) => {//inserting message into postgreSQL database first
            try {
                if (err) {
                    res.send('Invalid user name')
                  }else{
                  res.send("Affected participants have been alerted");
                  sendEmail(req.body.header, req.body.campus_update);//using sendemail function to use @sndgrid api servers to mass send email blast
                  client.release();
                  }
            } catch(err){
                console.log(err);
            }
        });
    });

    }

    static async sendEmail(header, campus_update){

        const client = await pool.connect();
        client.query('SELECT name from test_table', function(err, res, fs) {
        
          result_query = [];
    
          for(var row_item in res.rows){
            console.log (row_item );
            for(var colum_item in res.rows[ row_item ]){
              console.log(res.rows[row_item][column_item]);
              result_query.push(res.rows[row_item][column_item]);
            }
          }
    
          console.log(array);
          // console.log(array);
          if(err){
            console.log('You made mistake');
          }
          else 
          {
            
            sgMail.setApiKey("YOUR API KEY");
              const msg = {
              to: array, //array of emails
              from: 'rohitbasu1997@gmail.com',
              subject: header,
               text: campus_update,
              };
      
              sgMail.sendMultiple(msg);
    
          }
          return;
        });
      } 


}
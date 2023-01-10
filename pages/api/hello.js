export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });

    // You can then write code to directly save it to your database. 
    // const email = req.body.email;
    // Then save email to your database, etc...
  
}

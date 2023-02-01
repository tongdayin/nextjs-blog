// API Routes can't be used with next export

// /api/* are server-side only bundles and won't increase your client-side bundle size.
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });

    // You can then write code to directly save it to your database.
    // const email = req.body.email;
    // Then save email to your database, etc...

    // handle different HTTP methods
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
}

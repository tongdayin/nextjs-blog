export default function Form() {
    // Handle the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Cast the event target to an html form
        const form = event.target;

        // Get data from the form.
        const data = {
            first: form.first.value,
            last: form.last.value,
        };

        // Send the form data to our API and get a response.
        const response = await fetch('/out/api/form', {
            // Body of the request is the JSON data we created above.
            body: JSON.stringify(data),
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // The method is POST because we are sending data.
            method: 'POST',
        });

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        alert(`Is this your full name: ${result.data}`);
    };
    return (
        <>
            <div style={{ textAlign: 'center' }}>React Basic HTML Form</div>
            <form action='/out/api/form' method='post'>
                <label htmlFor='first'>First Name</label>
                <input type='text' id='first' name='first' required />

                <label htmlFor='last'>Last Name</label>
                <input type='text' id='last' name='last' required />

                <button type='submit'>Submit</button>
            </form>
            <div style={{ textAlign: 'center' }}>JavaScript Basic HTML Form</div>
            {/* demo */}
            {/* <form action='/send-data-here' method='post'> */}
            {/* JS 方式：阻止 form 自动刷新页面 */}
            {/* <form onSubmit={handleSubmit}> */}
            {/* no JS 方式：form 会跳转页面 */}
            <form action='/out/api/form' method='post'>
                <label for='first'>First name:</label>
                <input type='text' id='first' name='first' />
                <label for='last'>Last name:</label>
                <input type='text' id='last' name='last' />
                {/* <label for='roll'>Roll Number</label>
                <input type='text' id='roll' name='roll' required minlength='10' maxlength='20' />
                <label for='name'>Name:</label>
                <input type='text' id='name' name='name' required /> */}
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

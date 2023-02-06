// This example uses the external library fuse.js for fuzzy search.
// The module is only loaded in the browser after the user types in the search input.
import { useState } from 'react';

const names = ['Tim', 'Joe', 'Bel', 'Lee'];

export default function Page() {
    const [results, setResults] = useState();

    return (
        <div>
            <input
                type='text'
                placeholder='Search'
                onChange={async (e) => {
                    const { value } = e.currentTarget;
                    // Dynamically load fuse.js
                    const Fuse = (await import('fuse.js')).default;
                    const fuse = new Fuse(names);

                    setResults(fuse.search(value));
                }}
            />
            <pre>Results: {JSON.stringify(results, null, 2)}</pre>
        </div>
    );
}

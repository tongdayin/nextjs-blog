// If an error is thrown inside getServerSideProps, it will show the pages/500.js file.
// You can use getStaticProps inside this page if you need to fetch data at build time.
export default function Custom500() {
    return <h1>500 - Server-side error occurred</h1>;
}

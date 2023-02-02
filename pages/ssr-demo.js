// Notice there is not a loading skeleton

// import withSession from 'lib/session';
// import Layout from 'components/Layout';

// export const getServerSideProps = withSession(async function ({ req, res }) {
//     const { user } = req.session;

//     if (!user) {
//         return {
//             redirect: {
//                 destination: '/login',
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: { user },
//     };
// });

// const Profile = ({ user }) => {
//     // Show the user. No loading state is required
//     return (
//         <Layout>
//             <h1>Your Profile</h1>
//             <pre>{JSON.stringify(user, null, 2)}</pre>
//         </Layout>
//     );
// };

// export default Profile;

export default function Test() {
    return <h1>临时导出</h1>;
}
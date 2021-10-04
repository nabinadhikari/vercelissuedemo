export default function PostDetail({ post, cachedNumber }) {
    return (
        <div>
            <p>Cached for {cachedNumber} seconds</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
export async function getStaticProps(context) {

    const { postId } = context.params;
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(r => r.json());
    const cachedNumber = 100 - Number.parseInt(postId);

    return {
        props: {
            post,
            cachedNumber,
        }, // will be passed to the page component as props
        revalidate: 20,
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

// export async function getServerSideProps(context) {
//     // console.log(context);
//     const { postId } = context.query;
//     const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
//         .then(r => r.json());
//     console.log(post)
//     return {
//         props: {
//             post,
//         }
//     }
// }
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { sport, sportId, sportEventType } = router.query;
  return (
    <div>
      <h1>Router test</h1>
      {sport}
      {sportId}
      {sportEventType}
    </div>
  )
}
export const getServerSideProps = async ({ query }) => {
  console.log('sport index:', query);
  return { props: {} };
};
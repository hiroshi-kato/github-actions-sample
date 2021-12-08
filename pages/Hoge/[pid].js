import { useRouter } from 'next/router';

export default function HogeDetail() {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.pid}</h1>
    </div>
  );
}

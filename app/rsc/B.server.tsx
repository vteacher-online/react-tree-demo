export default async function B({ a, d }: { a: string; d: string }) {
  const result = await fetch('http://localhost:3000/api/examples', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 5 },
  });

  const json = await result.json();

  console.log(`B ServerComponent a=${a} d=${d}`);

  const examples = json
    .filter((data: { name: string; pos: string }) => {
      return data.name.includes(a) || data.pos.includes(a);
    })
    .sort((value: { id: string }, target: { id: string }) => {
      if (d == 'asc') {
        return value.id < target.id ? -1 : 1;
      } else {
        return value.id > target.id ? -1 : 1;
      }
    });

  return (
    <ul className="list-disc">
      {examples.map((example: any) => (
        <li key={example.id} className="m-5">
          {example.id} : {example.name} ({example.pos})
        </li>
      ))}
    </ul>
  );
}

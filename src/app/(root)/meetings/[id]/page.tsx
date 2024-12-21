export default function Meeting({ params }: { params: { id: string } }) {
  return <div className="text-white">Meeting Room: #{params.id}</div>;
}

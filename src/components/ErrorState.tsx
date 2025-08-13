export default function ErrorState({ message = 'Something went wrong.' }: { message?: string }) {
  return (
    <div className="mx-auto max-w-2xl bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl">
      {message}
    </div>
  );
}
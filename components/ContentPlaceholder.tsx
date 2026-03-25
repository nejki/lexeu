export default function ContentPlaceholder({ topic }: { topic: string }) {
  return (
    <div className="prose max-w-none">
      <div className="bg-warm-pale border border-site-border rounded-lg p-8 text-center">
        <p className="text-site-mid text-[15px]">
          Content for <strong>{topic}</strong> is coming soon.
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 py-16">
      <h2 className="text-[28px] font-semibold mb-8">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="space-y-4">
        {[1,2,3].map((i) => (
          <details key={i} className="border rounded-md p-4 cursor-pointer">
            <summary className="font-medium">
              Sample question {i}?
            </summary>
            <p className="text-gray-600 mt-2 text-sm">
              Answer content goes here explaining the question.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
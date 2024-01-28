"use client";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="mt-2 text-center">
      <p className="text-xl text-red-500 font-semibold">Server is Down</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default Fallback;

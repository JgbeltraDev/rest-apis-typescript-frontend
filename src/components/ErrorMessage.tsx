import type { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <div className="max-w-70 flex mx-auto">
      <div className="text-center my-4 bg-red-500 text-white font-bold p-3 uppercase rounded-sm">
        {children}
      </div>
    </div>
  );
}

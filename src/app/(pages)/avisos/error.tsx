'use client'

import ErrorComponent from "@/components/common/ErrorComponent";

export default function ErrorBoundary({
  error,
  reset,
}: { error: Error; reset: () => void }) {
  return <ErrorComponent error={error} reset={reset} />
}

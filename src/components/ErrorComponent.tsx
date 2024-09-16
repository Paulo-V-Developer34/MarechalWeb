export default function ErrorComponent({
  error,
  reset,
}: { error: Error; reset: () => void }) {
  return (
    <>
      <h1>O erro {error.message} ocorreu!</h1>
      <button onClick={reset} type="button">
        Tentar novamente
      </button>
    </>
  )
}

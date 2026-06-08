import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex size-20 items-center justify-center rounded-full bg-green-100 text-4xl">
        ✓
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          Order Confirmed!
        </h1>
        <p className="max-w-sm text-muted-foreground">
          Thank you for your purchase. You&apos;ll receive a confirmation email
          shortly with your order details.
        </p>
      </div>
      <Link
        href="/"
        className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Continue Shopping
      </Link>
    </main>
  );
}

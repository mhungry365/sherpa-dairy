import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

export async function POST(request: Request) {
  const { items }: { items: CartItem[] } = await request.json();

  if (!items?.length) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: items.map((item) => ({
      quantity: item.qty,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item.name,
          ...(item.image?.startsWith("http") && { images: [item.image] }),
        },
      },
    })),
    success_url: `${appUrl}/success`,
    cancel_url: `${appUrl}/#products`,
  });

  return NextResponse.json({ url: session.url });
}

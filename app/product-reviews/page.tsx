import { Suspense } from "react";
import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

export default async function ProductReviewsPage() {
    return (
        <>
            <h1>Product Reviews</h1>
            <Suspense fallback={<h2>Loading Product...</h2>}>
                <Product />
            </Suspense>
            <Suspense fallback={<h2>Loading Reviews...</h2>}>
                <Reviews />
            </Suspense>
        </>
    );
}
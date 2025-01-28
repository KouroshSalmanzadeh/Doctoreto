import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function HandleSearchFunc(router: AppRouterInstance, value: string): void {
    router.push(`/search?query=${encodeURIComponent(value)}`);
}
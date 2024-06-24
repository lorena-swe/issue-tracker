export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/issues/new",
    "/issues/edit/:id+"   // The "+" means that we need 1 or more params
  ]
}
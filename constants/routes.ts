const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
}

export default ROUTES;

// redirect("sign-in-something");  // chances of typo
// redirect(ROUTES.SIGN_IN)  // No chance of typo we will immediately get error message
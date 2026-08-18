export default async (request, context) => {
	const validUser = Deno.env.get("AUTH_USERNAME");
	const validPass = Deno.env.get("AUTH_PASSWORD");

	if (!validUser || !validPass) {
		return new Response("Server misconfigured: AUTH_USERNAME/AUTH_PASSWORD not set", { status: 500 });
	}

	const authHeader = request.headers.get("authorization");
	if (authHeader && authHeader.startsWith("Basic ")) {
		const decoded = atob(authHeader.slice("Basic ".length));
		const separatorIndex = decoded.indexOf(":");
		const user = decoded.slice(0, separatorIndex);
		const pass = decoded.slice(separatorIndex + 1);
		if (user === validUser && pass === validPass) {
			return context.next();
		}
	}

	return new Response("Authentication required", {
		status: 401,
		headers: { "WWW-Authenticate": 'Basic realm="Vardan Preview"' },
	});
};

export const config = {
	path: [
		"/preview",
		"/preview/*",
		"/makeadonation",
		"/makeadonation-usa",
		"/makeadonation-other",
	],
};

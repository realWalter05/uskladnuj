export { apiHandler };

function apiHandler(handler) {
	return async (req, res) => {
		// Standardazing method calls
		const method = req.method.toLowerCase();

		if (!handler[method])
			return res.status(405).end(`Method ${req.method} not allowed...`);
		
		try {
			await handler[method](req, res);
		} catch (err) {
			return res.status(500).end(`There was server error in method ${req.method} \n ${err}`);
		}
	}
}
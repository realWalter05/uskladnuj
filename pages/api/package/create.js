
import { apiHandler } from "~/helpers/api/api-handler";
import { packageRepo } from "~/helpers/api/package-repo";

export default apiHandler({
	post: create
});

async function create(req, res) {
	return res.status(201).json(await packageRepo.create(req.body));
}
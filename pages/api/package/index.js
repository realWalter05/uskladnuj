
import { apiHandler } from "~/helpers/api/api-handler";
import { packageRepo } from "~/helpers/api/package-repo";

export default apiHandler({
	get: getAllPackages
});

async function getAllPackages(req, res) {
	return res.status(200).json(await packageRepo.getAll());
}
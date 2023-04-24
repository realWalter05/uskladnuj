
import { apiHandler } from "~/helpers/api/api-handler";
import { packageRepo } from "~/helpers/api/package-repo";

export default apiHandler({
	get: getById,
	delete: _delete,
	put: update
});

async function getById(req, res) {
	return res.status(200).json(await packageRepo.getById(req.query.id_package));
}

async function _delete(req, res) {
	return res.status(200).json(await packageRepo.delete(req.query.id_package));
}

async function update(req, res) {
	return res.status(200).json(await packageRepo.update(req.query.id_package, req.body));
}

import { apiHandler } from "~/helpers/api/api-handler";
import { deliveryRepo } from "~/helpers/api/delivery-repo";

export default apiHandler({
	get: getById,
	delete: _delete,
	put: update
});

async function getById(req, res) {
	return res.status(200).json(await deliveryRepo.getById(req.query.id_delivery));
}

async function _delete(req, res) {
	return res.status(200).json(await deliveryRepo.delete(req.query.id_delivery));
}

async function update(req, res) {
	return res.status(200).json(await deliveryRepo.update(req.query.id_delivery, req.body));
}
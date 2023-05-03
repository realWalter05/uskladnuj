
import { apiHandler } from "~/helpers/api/api-handler";
import { deliveryRepo } from "~/helpers/api/delivery-repo";

export default apiHandler({
	get: getAllDeliverys
});

async function getAllDeliverys(req, res) {
	return res.status(200).json(await deliveryRepo.getAll());
}
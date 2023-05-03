
import { apiHandler } from "~/helpers/api/api-handler";
import { deliveryRepo } from "~/helpers/api/delivery-repo";

export default apiHandler({
	post: create
});

async function create(req, res) {
	return res.status(201).json(await deliveryRepo.create(req.body));
}
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deliveryRepo = {
	getAll: () => getAll(),
	getById: id => getById(id),
	find: x => find(x),
	create,
	update,
	delete: id => _delete(id)
};

async function getAll() {
	const deliveries = await prisma.delivery.findMany();
	return deliveries;
}

async function create(delivery) {
	console.log(delivery);
	await prisma.delivery.create({data: delivery});
}

async function update(id_delivery, delivery) {
	const updated_delivery = await prisma.delivery.update({
		where: {
			id: id_delivery
		},
		data: delivery
	})
	return updated_delivery;
}

async function _delete(id) {
	await prisma.delivery.delete({
		where: {id: id}
	})
}

async function getById(id) {
	const delivery = await prisma.delivery.findUnique({
		where: {id: id}
	});
	return delivery;
}

async function find(x) {
	const delivery = await prisma.delivery.find(x);
	return delivery;
}
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const packageRepo = {
	getAll: () => getAll(),
	getById: id => getById(id),
	find: x => find(x),
	create,
	update,
	delete: id => _delete(id)
};

async function getAll() {
	const packages = await prisma.Package.findMany();
	return packages;
}

async function create(_package) {
	await prisma.Package.create({data: _package});
}

async function update(id_package, _package) {
	const updated_package = await prisma.Package.update({
		where: {
			id: id_package
		},
		data: _package
	})
	return updated_package;
}

async function _delete(id) {
	console.log(id);
	await prisma.Package.delete({
		where: {id: id}
	})
}

async function getById(id) {
	const _package = await prisma.Package.findUnique({
		where: {id: id}
	});
	return _package;
}

async function find(x) {
	const _package = await prisma.Package.find(x);
	return _package;
}
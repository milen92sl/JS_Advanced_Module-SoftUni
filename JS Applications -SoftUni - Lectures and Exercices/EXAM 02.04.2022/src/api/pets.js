import * as api from './api.js';

const endpoints = {
    recent: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    pets: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    byId: '/data/pets/',
    deleteById: '/data/pets/',
    update: '/data/pets/',
    donation: '/data/donation',
    total: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    own: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getRecent() {
    return api.get(endpoints.recent);
}

export async function getAll() {
    return api.get(endpoints.pets);
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function deleteById(id) {
    return api.del(endpoints.deleteById + id);
}

export async function update(id, data) {
    return api.put(endpoints.update + id, data);
}

export async function donate(id, data) {
    return api.put(endpoints.update + id, Number(data.donation.value += 100));
}
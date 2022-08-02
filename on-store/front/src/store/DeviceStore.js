import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Утюги" },
      { id: 4, name: "Настольные лампы" },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];

    this._device = [
      {
        id: 1,
        name: "12 pro",
        price: 85000,
        rating: 5,
        img: "144aaf0f-8d10-47a0-b43f-34b409d813b0.jpg",
      },
      {
        id: 2,
        name: "a51",
        price: 75000,
        rating: 4,
        img: "53118b37-d1ac-41c1-93c9-e52214231a09.jpg",
      },
      {
        id: 3,
        name: "note pro",
        price: 65000,
        rating: 3,
        img: "8ec9a76f-1317-4be0-a6f2-ad01411a3126.jpg",
      },
      {
        id: 1,
        name: "Atlant",
        price: 65000,
        rating: 2,
        img: "0512111e-df79-4bc6-b4d3-f82e45892915.jpg",
      },
    ];

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}

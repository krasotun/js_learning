const devicesMock = [
  {
    id: 1,
    name: 'Девайс',
    type: 'Девайсы',
    categoryID: 2,
  },
  {
    id: 2,
    name: 'Ребенок 1го девайса',
    type: 'Девайсы',
    categoryID: 3,
    parentID:1,
  },
  {
    id: 3,
    name: 'Второй ребенок 1го девайса',
    type: 'Девайсы',
    categoryID: 4,
    parentID: 1,
  },
]

const deviceMock = {
    id: 1,
    name: 'Девайс',
    type: 'Девайсы',
    categoryID: 2,
}

// function filterDevices(devices, device) {
//     return devices.filter((item) => item.parentID === device.id);
// }

// console.log(filterDevices(devicesMock, deviceMock));

console.log(devicesMock[1].parentID);
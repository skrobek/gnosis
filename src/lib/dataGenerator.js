import faker from 'faker';
import moment from 'moment';

export default function generateData() {
  const list = [];

  for(let i = 0; i < 10; i++) {
    list.push({
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dateOfBirth: moment(faker.date.past()).format('YYYY/MM/DD'),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email()
    });
  }

  return list;
}


class ContainerState {
  constructor(c1, c2, c3, cap1 = 10, cap2 = 7, cap3 = 4) {
    this.containers = [c1, c2, c3];
    this.capacity = [cap1, cap2, cap3];
  }

  negativeAmount() {
    let result = false;
    for (let i = 0; (this.containers.length && result); i += 1) {
      if (this.containers[i] < 0) {
        result = true;
      }
    }
    return result;
  }

  overflowing() {
    let result = false;
    for (let i = 0; (this.containers.length && result); i += 1) {
      if (this.containers[i] > this.capacity[i]) {
        result = true;
      }
    }
    return result;
  }

  legalState() {
    return !(this.overflowing() || this.negativeAmount());
  }

  pour(origin, destination) {
    const newContainers = [];
    Object.assign(newContainers, this.containers);

    if ((this.containers[origin] > 0) && (this.containers[destination] !== this.capacity[destination])) {

      if (this.containers[origin] <= (this.capacity[destination] - this.containers[destination])) {
        newContainers[destination] += newContainers[origin];
        newContainers[origin] = 0;
      } else {
        const tempAmount = this.capacity[destination] - this.containers[destination];

        newContainers[origin] -= tempAmount;
        newContainers[destination] += tempAmount;
      }
    }

    return new ContainerState(newContainers[0], newContainers[1], newContainers[2]);
  }

}

const test = new ContainerState(0, 7, 4);
const l = [test];
l.append(test.pour(2, 0));
System.out.println('asd');

export default ContainerState;

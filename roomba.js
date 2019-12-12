const fs = require('fs')

const drive = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (!err) {
        const arr = data.split("\n");
        const instructions = splitIns(arr);
        calculate(instructions);
    } else {
        console.log(err);
    }
  });
}


const splitArr = []

const splitIns = (arr) => {
    arr.forEach((ins) => {
    splitArr.push(ins.split(" "));
  })
    return splitArr
}

const calculate = (ins) => {
  const dimensions = stringToNum(ins[0]);
  let position = stringToNum(ins[1]);
  const index = ins.findIndex(isText);
  const directions = ins[index][0].split("");
  let dirts = dirtToNum(ins.slice(2,index));
  let count = 0;

  directions.forEach((dir) => {
    if (dir == 'N') {
      if (position[1] < dimensions[1]) position[1] += 1;
    } else if (dir == 'E') {
      if (position[0] < dimensions[0]) position[0] += 1;

    } else if (dir == 'S') {
      if (position[1] > 0) position[1] -= 1;

    } else if (dir == 'W') {
      if (position[0] > 0) position[0] -= 1;
    }
   dirts.forEach((dirt) => {
      if (dirt.join() == position.join()) {
        count += 1;
        dirts = dirts.filter(dirt => dirt.join() !== position.join());
      }
    })
  })

  const posString = position.join(" ");
  const result = `${posString} \n${count}`;
  console.log(result);
}


const isText = (e) => {
  const re = /[A-Z]/g;
  return re.test(e)
}

const stringToNum = (arr) => {
  return arr.map((x) => {return parseInt(x, 10)})
}

const dirtToNum = (arr) => {
  let dirts = [];
  arr.forEach((dirt) => {
    dirts.push(stringToNum(dirt));
  })
  return dirts
}

drive('input.txt')


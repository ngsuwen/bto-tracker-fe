export default function getUnitsPerblkObjApi(launch, blk) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let blkObj = {
    total: [],
    taken: [],
  };

  let floors = ['01'];

  const objOutput = {};

  const result = fetch(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/api/units/${launch}/${blk}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        blkObj.total.push([element.unit, element.unit_type]);
        if (!element.availability) {
          blkObj.taken.push(element.unit);
        }
        let floorNumber = element.unit.slice(0, 2);
        if (!floors.includes(floorNumber)) {
          floors.push(floorNumber);
        }
      });
      objOutput.blkObj = blkObj;
      objOutput.floors = floors.sort().reverse();
      return objOutput;
    })
    .catch((error) => console.log("error", error));

  return result;
}

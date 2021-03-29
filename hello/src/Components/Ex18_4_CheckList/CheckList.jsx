import React, { useState } from "react";
const items = ["one", "two", "three", "four", "five"];

const CheckList = () => {
  const tempCheckList = items.map((item) => ({ name: item, check: false }));
  const [checkList, setList] = useState(tempCheckList);
  const deleteItems = (e) => {
    console.log("delete");
    // const tempList = checkList;
    const tempList = checkList.filter((item) => !item.check);
    console.log(checkList, tempList);
    console.log(checkList[0].check);
    setList(tempList);
  };

  const resetItems = (e) => {
    setList(tempCheckList);
  };

  const checkItems = (index) => {
    console.log("check", index);
    const list = [...checkList];
    list[index].check = !list[index].check;
    setList(list);
  };
  return (
    <div>
      <input type="button" value="Delete" onClick={deleteItems} />
      <input type="button" value="Reset" onClick={resetItems} />
      <ul>
        {checkList.map((item, index) => (
          <li>
            <input
              type="checkbox"
              checked={item.check}
              onChange={(e) => checkItems(index)}
            />
            {item.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckList;

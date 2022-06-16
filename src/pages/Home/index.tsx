import React, { useEffect, useState } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import { tipPercents } from "../../mock";

const Home = () => {
  const [tipPercent, setTipPercent] = useState<number>();
  const [personCount, setPersonCount] = useState<number>(1);
  const [billAmpunt, setBillAmount] = useState(0);
  const [percentPerson, setPercentPerson] = useState<number>();
  const [totalAmount, setTotalAmount] = useState<number>();

  const [error, setError] = useState<boolean>(false);

  const percent = (e: any) => {
    e.preventDefault();
    setTipPercent(e.target.value);
  };

  const checkPersonCount = () => {
    if (personCount < 1) {
      setError(true);
      return false;
    } else {
      return true;
    }
  };

  const getAmount = (bill: number, percent: number, person: number) => {
    if(checkPersonCount()){
        setPercentPerson(bill * percent / person);
        setTotalAmount(bill * (percent + 1) /person);
    }
  };

  useEffect(() => {
    checkPersonCount();
  }, [personCount]);

  const buttons = tipPercents.map((item: any) => {
    return (
      <Button
        text={item.key}
        value={item.value}
        onclick={(e: any) => percent(e)}
      />
    );
  });

  return <div>{buttons}</div>;
};

export default Home;

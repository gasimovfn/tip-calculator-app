import React, { useEffect, useState } from "react";

import Button from "../../components/Button";
import ErrorText from "../../components/ErrorText";
import Input from "../../components/Input";
import Text from "../../components/Text";
import {
  EButtonColor,
  EButtonTextColor,
  EIconType,
  ETextColor,
  ETextSize,
} from "../../enum";
import { tipPercents } from "../../mock";

import "./index.scss";

const Home = () => {
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [personCount, setPersonCount] = useState<number>(0);
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const [error, setError] = useState<boolean>(false);
  const [disabledBtn, setDisabledBtn] = useState<boolean>(true);

  const reset = () => {
    removeActiveBtn();
    setBillAmount(0);
    setPersonCount(0);
    setTipAmount(0);
    setTipPercent(0);
    setTotalAmount(0);
  };

  const removeActiveBtn = () => {
    const buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  };

  const setActive = (e: any) => {
    removeActiveBtn();
    e.target.classList.add("active");
  };

  const checkPersonCount = () => {
    if (personCount >= 1) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  const checkResetBtn = () => {
    if (tipPercent != 0 && billAmount != 0 && personCount != 0) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const calculate = () => {
    if (checkPersonCount()) {
      setTipAmount((billAmount * tipPercent) / personCount);
      setTotalAmount((billAmount * (tipPercent + 1)) / personCount);
    } else {
      setError(true);
    }
  };

  const getBillAmount = (e: any) => {
    setBillAmount(e.target.value);
  };

  const getTipPercent = (e: any) => {
    setTipPercent(e.target.value / 100);
    setActive(e);
  };

  const getPersonCount = (e: any) => {
    setPersonCount(e.target.value);
  };

  useEffect(() => {
    checkPersonCount();
    calculate();
    checkResetBtn();
  }, [billAmount, personCount, tipPercent]);

  const buttons = tipPercents.map((item: any) => {
    return (
      <Button
        text={item.key}
        value={item.value}
        onclick={(e: any) => getTipPercent(e)}
        buttonColor={EButtonColor.DARK}
        textColor={EButtonTextColor.WHITE}
      />
    );
  });

  return (
    <div className="main">
      <div className="title">
        <h1>
          SPLI <br /> TTER
        </h1>
      </div>
      <div className="wrap">
        <div className="calculate">
          <div className="bill-amount">
            <Text text="Bill" />
            <Input
              onchange={(e: any) => getBillAmount(e)}
              icon={EIconType.USD}
              defaultValue={billAmount}
            />
          </div>
          <div className="select-tip">
            <Text text="Select tip %" />
            <div className="tip-buttons">
              {buttons}
              <Input
                onchange={(e: any) => getTipPercent(e)}
                placeHolder="CUSTOM"
              />
            </div>
          </div>
          <div className={`people ${error ? "error" : ""}`}>
            <div className="label">
              <Text text="Number of People" />
              {error && <ErrorText message="Can not be zero" />}
            </div>

            <Input
              onchange={(e: any) => getPersonCount(e)}
              icon={EIconType.USER}
              defaultValue={personCount}
            />
          </div>
        </div>
        <div className="result">
          <div className="text-wrap">
            <Text text="Tip Amount" color={ETextColor.WHITE} />
            <Text
              text={`$ ${String(tipAmount.toFixed(2))}`}
              color={ETextColor.GREEN}
              fontSize={ETextSize.L}
            />
          </div>
          <div className="text-wrap">
            <Text text="Total Amount" color={ETextColor.WHITE} />
            <Text
              text={`$ ${String(totalAmount.toFixed(2))}`}
              color={ETextColor.GREEN}
              fontSize={ETextSize.L}
            />
          </div>
          <div className="button-wrap">
            <Button
              text="RESET"
              buttonColor={EButtonColor.LIGHT}
              textColor={EButtonTextColor.WHITE}
              onclick={reset}
              disabled={disabledBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

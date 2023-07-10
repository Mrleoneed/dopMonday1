import React from 'react';
import {MoneyType} from "./App";
import {S} from './StyledStyles'

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
        <S.Banknote color={props.money.banknotes === 'Dollars' ? 'darkseagreen' : 'lightblue'}>
            <S.Name> {props.money.banknotes}</S.Name>
            <S.Nominal>{props.money.value}</S.Nominal>
        </S.Banknote>


    );
};


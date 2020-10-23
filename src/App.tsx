import * as React from 'react';// @ts-ignore
const style = require('./main.css');


export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <h1 className={style.header}>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);

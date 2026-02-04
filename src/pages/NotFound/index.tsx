import Result from 'antd/es/result';
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Такой страницы не существует"
      extra={<Link to="/">Вернуться на главную страницу</Link>}
    />
  );
};
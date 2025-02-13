/* eslint-disable i18next/no-literal-string */
/* eslint-disable react/jsx-curly-brace-presence */
import { Counter } from 'entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input placeholder={'Тескт'} value={value} onChange={onChange} />
            <Counter />
        </div>
    );
};

export default MainPage;

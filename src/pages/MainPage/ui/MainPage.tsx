import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('main')}
            {' '}
            {t('world')}
            {' '}
            {t('car')}
            {' '}
            {t('animal')}
            {' '}
            {t('sun')}
        </div>

    );
};

export default MainPage;

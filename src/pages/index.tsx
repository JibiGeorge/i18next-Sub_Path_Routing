import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';

export default function Home() {

  const { t } = useTranslation('common');

  return (
    <div className="w-full px-10 py-10 font-lato text-center flex flex-col gap-2">
      <p className="text-[#a39797] font-medium">{t('title')}</p>
      <h1 className="text-4xl font-bold">{t('about', { name: 'JIBI GEORGE' })}</h1>
      <p className="text-[#a39797] font-medium">{t('designation')}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale || 'en'; // Provide a default value if locale is undefined
  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common']))
    }
  }
}
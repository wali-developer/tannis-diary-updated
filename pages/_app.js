import CustomeLayout from '../components/Layout';
import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/callendercutomization.css'
import '../styles/linechart.css'
import NextNProgress from "nextjs-progressbar";

function MyApp ({ Component, pageProps })
{
  const Layout = Component.getLayout || ((page) => page);
  return (
    <CustomeLayout>
      <NextNProgress color="#B3DD07" />
      { Layout(<Component { ...pageProps } />) }
    </CustomeLayout>
  )
}

export default MyApp

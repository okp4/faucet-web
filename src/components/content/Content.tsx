import getConfig from 'next/config'
import type { Captcha } from '../../config/config.type'
import { Faucet, Footer, Header, Typography, useTheme, useTranslation, Logo } from '@okp4/ui'
import type { DeepReadonly, Theme, ThemeContextType, UseTranslationResponse } from '@okp4/ui'
import lightCosmos from '@okp4/ui/lib/assets/images/cosmos-clear.png'
import darkCosmos from '@okp4/ui/lib/assets/images/cosmos-dark.png'
import '../../i18n/index'

// eslint-disable-next-line @typescript-eslint/typedef
const { publicRuntimeConfig } = getConfig()

const languages = [
  {
    name: 'English',
    lng: 'en'
  },
  {
    name: 'Français',
    lng: 'fr'
  }
]

const Okp4Link = (): JSX.Element => {
  const { t }: UseTranslationResponse = useTranslation()

  return (
    <Typography as="p" color="invariant-text" fontSize="x-small" fontWeight="xlight" noWrap>
      {`${t('footer:brand-link')} `}
      <Typography color="invariant-text" fontSize="x-small" fontWeight="bold">
        <a
          className="okp4-brand-link"
          href="https://okp4.network/"
          rel="author noreferrer"
          target="_blank"
        >
          ØKP4
        </a>
      </Typography>
      <Typography color="invariant-text" fontSize="x-small" fontWeight="xlight"> - v{publicRuntimeConfig.version}</Typography>
    </Typography>
  )
}
type ContentProps = { chainId: string; captcha: Captcha }

export const Content: React.FC<ContentProps> = ({
  chainId,
  captcha
}: DeepReadonly<ContentProps>) => {
  const { theme }: ThemeContextType = useTheme()
  const themedImage = theme === 'light' ? lightCosmos.src : darkCosmos.src
  const captchaParameters = { APIKey: captcha.recaptchaV2.siteKey, theme: 'light' as Theme }

  return (
    <div className="okp4-faucet-testnet-content" style={{ backgroundImage: `url(${themedImage})` }}>
      <Header firstElement={<Logo size="small" />} />
      <div className="okp4-faucet-content">
        <Faucet captcha={captchaParameters} chainId={chainId} />
      </div>
      <Footer languages={languages} lastElement={<Okp4Link />} />
    </div>
  )
}

export default Content

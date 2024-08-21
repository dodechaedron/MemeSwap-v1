import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MemeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MemeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://1tronic.io/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MemeSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MemeSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MemeSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MemeSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MemeSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MemeSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MemeSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MemeSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MemeSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MemeSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MemeSwap')}`,
      }
    default:
      return null
  }
}

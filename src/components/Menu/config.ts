import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools ',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: "Price Charts",
    icon: "InfoIcon",
    items: [
         {
            label: "PooCoin Chart",
            href: "https://poocoin.app/tokens/0xd15d8744528231b1ef1775a0f4ff5275e7f74dea",
         },
         {
            label: "Dex Guru Chart",
            href: "https://dex.guru/token/0xd15d8744528231b1ef1775a0f4ff5275e7f74dea-bsc",
         },
     ],
  },	
  {
    label: 'Docs',
    icon: 'HelpIcon',
    href: 'https://smokingcucumberfinance.gitbook.io/smokingcucumber/',
  },
  {
    label: 'Twitter',
    icon: 'TwitterIcon',
    href: 'https://twitter.com/SmokingCucumber',
  },
  {
    	label: "Telegram",
        icon: "TelegramIcon",
		items: [
            {
                label: "English",
                href: "https://t.me/SmokingCucumberFinanceChat",
            },
            {
                label: "Announcement",
                href: "https://t.me/SmokingCucumberFinance",
            },
        ],
    },
    {
    	label: 'RugDoc Review',
    	icon: 'AuditIcon',
    	href: 'https://rugdoc.io/project/smoking-cucumber/',
    },
]

export default config

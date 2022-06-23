import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const en: NavbarConfig = [
  {
    text: 'Stars',
    link: '/stars/',
    children: [
      '/stars/system.md',
      {
        text: '系统部署',
        children: [
          '/stars/api/deployment.md',
          '/stars/client/deployment.md',
          '/stars/redis/deployment.md',
        ]
      },
      {
        text: '功能与模块介绍',
        children: [
          '/stars/modules/common.md',
          '/stars/modules/core.md',
        ]
      }
    ]
  },
  {
    text: '商城',
    children: [
      {
        text: 'api',
        children: [
          {
            text: '商城api说明文档',
            link: '/shop/api',
          },
          '/shop/api/deployment.md',
          '/shop/api/shop_light_API.md'
        ],
      },
      {
        text: 'mobile',
        children: [
          {
            text: '商城Mobile端前端说明文档',
            link: '/shop/mobile',
          },
          '/shop/mobile/system.md',
          '/shop/mobile/deploy.md',
          '/shop/mobile/home.md',
          '/shop/mobile/cart.md',
          '/shop/mobile/forgetpwd.md',
          '/shop/mobile/login.md',
          '/shop/mobile/order.md',
          '/shop/mobile/quickorder.md',
          '/shop/mobile/regconsumer.md',
          '/shop/mobile/regmember.md',
          '/shop/mobile/shop_detail.md',
          '/shop/mobile/shop_list.md',
          '/shop/mobile/userAddress.md',
          '/shop/mobile/userBasicinfo.md',
          '/shop/mobile/userIndex.md',
          '/shop/mobile/userOrder.md',
          '/shop/mobile/userOrderDetail.md',
          '/shop/mobile/userSafety.md',
        ],
      },
      {
        text: 'pc',
        children: [
          {
            text: '商城PC端前端说明文档',
            link: '/shop/pc',
          },
          '/shop/pc/system.md',
          '/shop/pc/deploy.md',
          '/shop/pc/home.md',
          '/shop/pc/cart.md',
          '/shop/pc/forgetpwd.md',
          '/shop/pc/login.md',
          '/shop/pc/order.md',
          '/shop/pc/quickorder.md',
          '/shop/pc/regconsumer.md',
          '/shop/pc/regmember.md',
          '/shop/pc/shop_detail.md',
          '/shop/pc/shop_list.md',
          '/shop/pc/userAddress.md',
          '/shop/pc/userBasicinfo.md',
          '/shop/pc/userIndex.md',
          '/shop/pc/userOrder.md',
          '/shop/pc/userOrderDetail.md',
          '/shop/pc/userSafety.md',
        ],
      },
    ],
  },
  {
    text: '支付系统',
    children: [
      {
        text: '支付收银台说明文档',
        link: '/payment',
      },
      '/payment/deployment.md',
      '/payment/APIs.md',
      '/payment/addSupplier.md',
      '/payment/checkout.md',
      '/payment/paymentInstrument.md',
      '/payment/paymentSetting.md',
      '/payment/paymentSupplier.md',
      '/payment/viewControllers.md'
    ],
  },
]

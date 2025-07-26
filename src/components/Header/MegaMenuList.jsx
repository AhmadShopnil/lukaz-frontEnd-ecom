
import React from 'react'; 
import { MegaMenu } from 'primereact/megamenu';

export default function MegaMenuList() {
const items = [
  {
    label: 'Men',
    icon: 'pi pi-user',
    items: [
      [
        {
          label: 'Topwear',
          items: [
            { label: 'T-Shirts' },
            { label: 'Shirts' },
            { label: 'Jackets' },
            { label: 'Sweaters' },
            { label: 'Hoodies' }
          ]
        }
        
      ],
      [
        {
          label: 'Bottomwear',
          items: [
            { label: 'Jeans' },
            { label: 'Trousers' },
            { label: 'Shorts' },
            { label: 'Track Pants' }
          ]
        },
        {
          label: 'Innerwear & Sleepwear',
          items: [
            { label: 'Briefs' },
            { label: 'Boxers' },
            { label: 'Vests' },
            { label: 'Nightwear' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Women',
    icon: 'pi pi-users',
    items: [
      [
        {
          label: 'Topwear',
          items: [
            { label: 'Kurtis' },
            { label: 'Tops' },
            { label: 'Sarees' },
            { label: 'Tunics' },
            { label: 'Blouses' }
          ]
        }
      ],
      [
        {
          label: 'Bottomwear',
          items: [
            { label: 'Jeans' },
            { label: 'Leggings' },
            { label: 'Skirts' },
            { label: 'Palazzos' },
            { label: 'Trousers' }
          ]
        },
        {
          label: 'Ethnic Wear',
          items: [
            { label: 'Suits' },
            { label: 'Lehengas' },
            { label: 'Dupattas' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Kids',
    icon: 'pi pi-star',
    items: [
      [
        {
          label: 'Boys',
          items: [
            { label: 'T-Shirts' },
            { label: 'Shirts' },
            { label: 'Shorts' },
            { label: 'Jeans' },
            { label: 'Ethnic Wear' }
          ]
        }
      ],
      [
        {
          label: 'Girls',
          items: [
            { label: 'Dresses' },
            { label: 'Tops' },
            { label: 'Leggings' },
            { label: 'Skirts' },
            { label: 'Ethnic Wear' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Sportswear',
    icon: 'pi pi-bolt',
    items: [
      [
        {
          label: 'Men',
          items: [
            { label: 'Track Pants' },
            { label: 'Shorts' },
            { label: 'Jerseys' },
            { label: 'Sneakers' }
          ]
        }
      ],
      [
        {
          label: 'Women',
          items: [
            { label: 'Tights' },
            { label: 'Sports Bras' },
            { label: 'Jackets' },
            { label: 'Sneakers' }
          ]
        }
      ],
      [
        {
          label: 'Accessories',
          items: [
            { label: 'Caps' },
            { label: 'Wristbands' },
            { label: 'Socks' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Brands',
    icon: 'pi pi-tags',
    items: [
      [
        {
          label: 'Popular',
          items: [
            { label: 'Nike' },
            { label: 'Adidas' },
            { label: 'Puma' },
            { label: 'Levi’s' },
            { label: 'H&M' },
            { label: 'Zara' }
          ]
        }
      ],
      [
        {
          label: 'Luxury',
          items: [
            { label: 'Gucci' },
            { label: 'Armani' },
            { label: 'Versace' },
            { label: 'Ralph Lauren' }
          ]
        }
      ]
    ]
  }
];


    return (
        <div className=" ">
            <MegaMenu className='' model={items} orientation="vertical" breakpoint="960px" />
        </div>
    )
}
        
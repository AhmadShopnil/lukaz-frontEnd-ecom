"use client"
import React, { useRef, useState } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import MegaMenuList from './MegaMenuList';
import { ToggleButton } from 'primereact/togglebutton';
import { ChevronRight, Menu, X } from 'lucide-react';
import MegaMenuTable from './MegaMenuTable';

const mainMenu = [
//   {
//     label: "Summer Sale",
//     submenu: null,
//   },
  {
    label: "Men's",
    submenu: {
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Women's",
    submenu: {
  title: "Women's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Kids'",
    submenu: {
  title: "Kids's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Run",
    submenu: {
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Trail",
    submenu: {
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Hike",
    submenu: {
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Sports",
    submenu:{
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Brands",
    submenu: {
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Advice",
    submenu: {
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
  {
    label: "Vitality",
    submenu: {
  title: "Men's Store",
  columns: [
    {
      heading: "Shoes for",
      items: [
        { label: "Road Running", link: "/mens/shoes/road-running" },
        { label: "Light Trail", link: "/mens/shoes/light-trail" },
        { label: "Fell Running & Technical Trail", link: "/mens/shoes/fell-technical" },
        { label: "Track & Field", link: "/mens/shoes/track-field" },
        { label: "Race Day", link: "/mens/shoes/race-day" },
        { label: "All Running Shoes", link: "/mens/shoes/all" },
        { label: "Hiking", link: "/mens/shoes/hiking" },
        { label: "Gym", link: "/mens/shoes/gym" },
        { label: "Court", link: "/mens/shoes/court" },
        { label: "Sandals", link: "/mens/shoes/sandals" }
      ],
      viewAll: { label: "View All Shoes", link: "/mens/shoes" }
    },
    {
      heading: "Clothing",
      items: [
        { label: "Bottoms", link: "/mens/clothing/bottoms" },
        { label: "Compression", link: "/mens/clothing/compression" },
        { label: "Hi-Visibility", link: "/mens/clothing/hi-visibility" },
        { label: "Jackets", link: "/mens/clothing/jackets" },
        { label: "Long Sleeve Tops", link: "/mens/clothing/long-sleeve-tops" },
        { label: "Shorts", link: "/mens/clothing/shorts" },
        { label: "T-Shirts", link: "/mens/clothing/t-shirts" },
        { label: "Tights", link: "/mens/clothing/tights" },
        { label: "Vests", link: "/mens/clothing/vests" },
        { label: "Underwear", link: "/mens/clothing/underwear" }
      ],
      viewAll: { label: "View All Clothing", link: "/mens/clothing" }
    },
    {
      heading: "Accessories",
      items: [
        { label: "Backpacks", link: "/mens/accessories/backpacks" },
        { label: "Gloves", link: "/mens/accessories/gloves" },
        { label: "GPS & Watches", link: "/mens/accessories/gps-watches" },
        { label: "Headwear", link: "/mens/accessories/headwear" },
        { label: "Hydration", link: "/mens/accessories/hydration" },
        { label: "Injury Accessories", link: "/mens/accessories/injury" },
        { label: "Socks", link: "/mens/accessories/socks" }
      ],
      viewAll: { label: "View All Accessories", link: "/mens/accessories" }
    },
    {
      heading: "Sports",
      items: [
        { label: "Running", link: "/mens/sports/running" },
        { label: "Hiking", link: "/mens/sports/hiking" },
        { label: "Biking", link: "/mens/sports/biking" },
        { label: "Climbing", link: "/mens/sports/climbing" },
        { label: "Gym", link: "/mens/sports/gym" },
        { label: "Hockey", link: "/mens/sports/hockey" },
        { label: "Padel", link: "/mens/sports/padel" },
        { label: "Swimming", link: "/mens/sports/swimming" },
        { label: "Squash", link: "/mens/sports/squash" },
        { label: "Tennis", link: "/mens/sports/tennis" },
        { label: "Triathlon", link: "/mens/sports/triathlon" }
      ],
      viewAll: { label: "View All Sports", link: "/mens/sports" }
    },
    {
      heading: "Top Brands",
      items: [
        { label: "adidas", link: "/mens/brands/adidas" },
        { label: "ASICS", link: "/mens/brands/asics" },
        { label: "Higher State", link: "/mens/brands/higher-state" },
        { label: "HOKA", link: "/mens/brands/hoka" },
        { label: "Inov-8", link: "/mens/brands/inov-8" },
        { label: "Merrell", link: "/mens/brands/merrell" },
        { label: "Montane", link: "/mens/brands/montane" },
        { label: "Mizuno", link: "/mens/brands/mizuno" },
        { label: "New Balance", link: "/mens/brands/new-balance" },
        { label: "Nike", link: "/mens/brands/nike" },
        { label: "Salomon", link: "/mens/brands/salomon" },
        { label: "Under Armour", link: "/mens/brands/under-armour" }
      ],
      viewAll: { label: "View All Top Brands", link: "/mens/brands" }
    }
  ]
},
  },
];


export default function MenuToggle() {
  
const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const op = useRef(null);
const handleMenuClick=(e)=>{
    op.current.toggle(e)
    setIsMenuOpen(!isMenuOpen)
}

    return (
        <div className=" ">
              <button onClick={(e) =>handleMenuClick(e) }>
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
           
            <OverlayPanel ref={op}>
              
              <div className="flex text-gray-4 mt-4 ">
              
            {/* Left Side Menu */}
            <div className="flex flex-col gap-4">
              {mainMenu.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveMenu(index)}
                  className={`px-4 flex  items-center justify-between ${
                    activeMenu === index ? "text-black " : ""
                  }`}
                >
                  <span>{item.label}</span>
                <span>  {item.submenu && <ChevronRight className="h-4 w-4" />}</span>
                </div>
              ))}
            </div>

            {/* Right Side Submenu */}
            <div className="  ">
              {mainMenu[activeMenu]?.submenu && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <MegaMenuTable  megaMenuData={mainMenu[activeMenu]?.submenu}/>
                  {/* {mainMenu[activeMenu].map((item, idx) => (
                   
                  ))} */}
                </div>
              ) }
            </div>
          </div>
            </OverlayPanel>
        </div>
    );
}
        
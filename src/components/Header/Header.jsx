// Updated Header component with Mega Menu on hamburger click
"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import MenuToggle from "./MenuToggle";
import MegaMenuTable from "./MegaMenuTable";

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


export default function Header() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const menuIconRef = useRef(null)
  const megamenuRef = useRef(null)

 const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleClickOutside = event => {
    if (
      isMenuOpen &&
      megamenuRef.current &&
      !megamenuRef.current.contains(event.target) &&
      !menuIconRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false)
    }
  
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })




  return (
    <div className=" overflow-hidden sticky top-0 z-50">
      {/* Top white Header */}
      <div className="bg-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-8">
          <p className="text-center">Free delivery on orders over £50</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black py-2 text-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="w-2/5 flex gap-6 md:gap-10">
              {/* MegaMenu Icon */}
              {/* <MenuToggle/> */}

              <button  onClick={toggleMenu} ref={menuIconRef}>
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
              {/* Logo */}
              <h1 className="text-2xl font-bold">Lukaz</h1>
            </div>

            {/* Search + Icons */}
            <div className="flex w-3/5 justify-between">
              <div className="w-2/3 max-w-xl mx-4 hidden sm:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 py-1.5 bg-white border text-black border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-sports-orange focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2">
                  <User className="h-5 w-5" />
                </button>
                <button className="p-2">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-sports-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Menu Panel */}
        
      </header>
        <div
        ref={megamenuRef}
       
            className={`mx-4 bg-teal-50 shadow-md rounded-xl  py-5  transition-transform duration-300 ease-in-out ${isMenuOpen
            ? 'transform translate-y-0 z-10 h-auto mt-2'
            : 'transform -translate-y-full z-10 hidden'
          }`}
      >
           <div className="flex text-gray-4 ">
                     
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
      </div>
    </div>
  );
}

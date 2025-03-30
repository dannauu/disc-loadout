import { Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const InTheBag = () => {
  return (
    <div className='main'>
      <Typography>InTheBag</Typography>

      <div className="gridWrapper">
        <div className='gridItem'>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/">Link to somewhere</Link>
          </div>
        </div>
        <div className='gridItem'>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/">Link to somewhere</Link>
          </div>
        </div>
        <div className='gridItem'>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/">Link to somewhere</Link>
          </div>
        </div>
        <div className='gridItem'>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/">Link to somewhere</Link>
          </div>
        </div>
        <div className='gridItem'>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/">Link to somewhere</Link>
          </div>
        </div>
        <div className='gridItem'>
          <Image alt='Jeremy Koling - MVP Disc Sports' src="/images/pro-pics/jeremy-koling.jpg" width={1200} height={630} />
          <div>
            <h2>Check out Jeremy's Loadout</h2>
            <Link href="/">Link to somewhere</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InTheBag